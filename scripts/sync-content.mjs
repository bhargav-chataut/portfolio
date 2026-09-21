import { writeFile } from 'node:fs/promises'

const GITHUB_USER = 'bhargav-chataut'
const MEDIUM_USER = 'bhargavchataut101'
const outputPath = new URL('../src/data/liveContent.ts', import.meta.url)

const previewOverrides = {
  'ev2030-RAG': {
    image: 'https://raw.githubusercontent.com/bhargav-chataut/ev2030-RAG/main/images/demo1.jpg',
    imageAlt: 'EU Energy Transition Analyzer interface',
    live: 'https://ev2030-rag.streamlit.app/',
  },
  ClashCoach: {
    image: 'https://raw.githubusercontent.com/bhargav-chataut/ClashCoach/main/screenshots/hero.jpg',
    imageAlt: 'ClashCoach application hero screen',
  },
  movie_summary_GPT: {
    image: 'https://raw.githubusercontent.com/bhargav-chataut/movie_summary_GPT/master/assets/demo.gif',
    imageAlt: 'Movie Summary GPT application demo',
  },
  SkySnap: {
    image: 'https://raw.githubusercontent.com/bhargav-chataut/SkySnap/main/app/assests/SkyNap.gif',
    imageAlt: 'SkySnap Android application demo',
  },
}

function cleanText(value = '') {
  return value.replace(/—/g, '-').trim()
}

function decodeXml(value = '') {
  return cleanText(
    value
      .replace(/^<!\[CDATA\[/, '')
      .replace(/\]\]>$/, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'"),
  )
}

function extractTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'))
  return decodeXml(match?.[1] || '')
}

function extractTags(block, tag) {
  return [...block.matchAll(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'gi'))]
    .map((match) => decodeXml(match[1]))
    .filter(Boolean)
}

async function getPinnedProjects() {
  const token = process.env.GITHUB_TOKEN
  if (!token) throw new Error('GITHUB_TOKEN is missing')

  const query = `
    query($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          nodes {
            ... on Repository {
              name
              description
              url
              homepageUrl
              openGraphImageUrl
              stargazerCount
              forkCount
              primaryLanguage { name }
            }
          }
        }
      }
    }
  `

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'bhargav-portfolio-sync',
    },
    body: JSON.stringify({ query, variables: { login: GITHUB_USER } }),
  })

  if (!response.ok) {
    throw new Error(`GitHub GraphQL failed: ${response.status}`)
  }

  const payload = await response.json()
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join('; '))
  }

  const nodes = payload.data?.user?.pinnedItems?.nodes || []

  return nodes.map((repo) => {
    const override = previewOverrides[repo.name] || {}
    const live = override.live || repo.homepageUrl || undefined
    const image = override.image || repo.openGraphImageUrl || undefined

    return {
      name: cleanText(repo.name),
      blurb: cleanText(repo.description || 'Pinned project on GitHub.'),
      stack: [
        ...(repo.primaryLanguage?.name ? [cleanText(repo.primaryLanguage.name)] : []),
        ...(typeof repo.stargazerCount === 'number' ? [`${repo.stargazerCount} stars`] : []),
        ...(typeof repo.forkCount === 'number' ? [`${repo.forkCount} forks`] : []),
      ],
      href: repo.url,
      ...(live ? { live } : {}),
      accent: repo.primaryLanguage?.name
        ? `${cleanText(repo.primaryLanguage.name).toUpperCase()} / PINNED`
        : 'GITHUB / PINNED',
      ...(image ? { image } : {}),
      ...(image ? { imageAlt: override.imageAlt || `${cleanText(repo.name)} project preview` } : {}),
    }
  })
}

async function getMediumWriting() {
  const response = await fetch(`https://medium.com/feed/@${MEDIUM_USER}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; BhargavPortfolio/1.0)',
      Accept: 'application/rss+xml, application/xml, text/xml',
    },
  })

  if (!response.ok) {
    throw new Error(`Medium RSS failed: ${response.status}`)
  }

  const xml = await response.text()
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)]
    .slice(0, 3)
    .map((match) => {
      const block = match[1]
      const categories = extractTags(block, 'category').slice(0, 2)
      const published = extractTag(block, 'pubDate')
      const date = published
        ? new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC',
          }).format(new Date(published))
        : ''

      return {
        title: extractTag(block, 'title'),
        meta: [date, categories.join(' · ') || 'Medium'].filter(Boolean).join(' · '),
        href: extractTag(block, 'link'),
      }
    })
    .filter((item) => item.title && item.href)

  return items
}

let liveProjects = []
let liveWriting = []

try {
  liveProjects = await getPinnedProjects()
  console.log(`Synced ${liveProjects.length} pinned GitHub repositories.`)
} catch (error) {
  console.warn('Pinned repo sync failed:', error.message)
}

try {
  liveWriting = await getMediumWriting()
  console.log(`Synced ${liveWriting.length} Medium posts.`)
} catch (error) {
  console.warn('Medium sync failed:', error.message)
}

const file = `// Generated by scripts/sync-content.mjs during deployment.\n// Do not edit manually.\n\nexport const liveProjects = ${JSON.stringify(liveProjects, null, 2)} as const\n\nexport const liveWriting = ${JSON.stringify(liveWriting, null, 2)} as const\n`

await writeFile(outputPath, file, 'utf8')
