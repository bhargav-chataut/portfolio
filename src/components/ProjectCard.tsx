import { ArrowUpRight, Github, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export type Project = {
  name: string
  blurb: string
  stack: readonly string[]
  href: string
  live?: string
  demo?: string
  accent: string
  image?: string
  imageAlt?: string
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const mediaHref = project.demo || project.live || project.href

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      {project.image && (
        <a className="project-media" href={mediaHref} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
          <img src={project.image} alt={project.imageAlt || `${project.name} preview`} loading="lazy" />
        </a>
      )}
      <div className="project-content">
        <div className="project-topline"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.accent}</span></div>
        <div>
          <h3>{project.name}</h3>
          <p>{project.blurb}</p>
        </div>
        <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="project-links">
          <a href={project.href} target="_blank" rel="noreferrer"><Github size={17}/> Code</a>
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live <ArrowUpRight size={16}/></a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><Play size={15}/> Demo</a>}
        </div>
      </div>
    </motion.article>
  )
}
