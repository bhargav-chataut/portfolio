export const projects = [
  {
    name: 'ev2030-RAG',
    blurb: 'Grounded RAG over EU energy policy documents with hybrid retrieval, semantic chunking, reranking, and Eurostat fact-checking.',
    stack: ['Python', 'RAG', 'BM25', 'Sentence Transformers', 'Streamlit'],
    href: 'https://github.com/bhargav-chataut/ev2030-RAG',
    live: 'https://ev2030-rag.streamlit.app/',
    accent: 'EU ENERGY / RAG',
  },
  {
    name: 'ClashCoach',
    blurb: 'AI-powered Clash Royale deck analyzer with ML-based win-rate prediction, deck scoring, and matchup analysis.',
    stack: ['Python', 'FastAPI', 'Machine Learning'],
    href: 'https://github.com/bhargav-chataut/ClashCoach',
    accent: 'GAME AI / ML',
  },
  {
    name: 'movie_summary_GPT',
    blurb: 'A custom NanoGPT web app trained on ~42K CMU movie plots to generate believable plot summaries from a title.',
    stack: ['PyTorch', 'nanoGPT', 'FastAPI', 'React', 'Docker'],
    href: 'https://github.com/bhargav-chataut/movie_summary_GPT',
    accent: 'LLM / FROM SCRATCH',
  },
  {
    name: 'BullyBarrier',
    blurb: 'NLP classification pipeline for harmful and abusive social-media text using TF-IDF and logistic regression.',
    stack: ['Python', 'scikit-learn', 'NLP', 'TF-IDF'],
    href: 'https://github.com/bhargav-chataut/BullyBarrier',
    accent: 'NLP / SAFETY',
  },
  {
    name: 'SkySnap',
    blurb: 'Android app for real-time sunrise and sunset times around the world using the Open-Meteo API.',
    stack: ['Kotlin', 'Android', 'Open-Meteo'],
    href: 'https://github.com/bhargav-chataut/SkySnap',
    accent: 'ANDROID / API',
  },
  {
    name: 'Air-Canvas',
    blurb: 'Touchless webcam drawing app that turns finger movement into a lightweight air canvas.',
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    href: 'https://github.com/bhargav-chataut/Air-Canvas',
    accent: 'VISION / INTERACTION',
  },
]

export const writing = [
  {
    title: 'Europe’s 2030 Energy Gamble: How the EU Is Rewiring Its Economy',
    meta: 'Energy systems · data · policy',
    href: 'https://medium.com/@bhargavchataut101',
  },
  {
    title: 'RAG_101: Part 2 — Deep Dive into Retrieval',
    meta: 'Dense search · BM25 · hybrid retrieval',
    href: 'https://medium.com/@bhargavchataut101',
  },
  {
    title: 'RAG_101: Part 1 — Intricacies of Chunking',
    meta: 'Chunking · context · RAG foundations',
    href: 'https://medium.com/@bhargavchataut101',
  },
]

export const experience = [
  {
    org: 'CodePath × Anthropic',
    role: 'AI Fellow',
    period: 'Jun 2026 — Aug 2026',
    text: 'Built AI applications with Claude and Claude Code, implemented vectorless RAG, and fine-tuned an LLM with QLoRA while applying responsible AI practices.',
  },
  {
    org: 'Optimal Answers LLC',
    role: 'Software Engineering Intern',
    period: 'Feb 2026 — May 2026',
    text: 'Worked on decision-optimization models for procurement, product mix, and production scheduling; integrated workflows with APIs, databases, Azure, and vision-language components.',
  },
]
