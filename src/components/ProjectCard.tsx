import { ArrowUpRight, Github } from 'lucide-react'
import { motion } from 'framer-motion'

export type Project = {
  name: string
  blurb: string
  stack: string[]
  href: string
  live?: string
  accent: string
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <div className="project-topline"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.accent}</span></div>
      <div>
        <h3>{project.name}</h3>
        <p>{project.blurb}</p>
      </div>
      <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="project-links">
        <a href={project.href} target="_blank" rel="noreferrer"><Github size={17}/> Code</a>
        {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live <ArrowUpRight size={16}/></a>}
      </div>
    </motion.article>
  )
}
