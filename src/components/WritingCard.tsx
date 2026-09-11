import { ArrowUpRight } from 'lucide-react'

export function WritingCard({ title, meta, href, index }: { title: string; meta: string; href: string; index: number }) {
  return (
    <a className="writing-card" href={href} target="_blank" rel="noreferrer">
      <span className="writing-index">0{index + 1}</span>
      <div><h3>{title}</h3><p>{meta}</p></div>
      <ArrowUpRight size={20}/>
    </a>
  )
}
