import { Github, Linkedin, Menu, PenLine, X } from 'lucide-react'
import { useState } from 'react'

const links = ['work', 'writing', 'experience', 'about']

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Bhargav Chataut home">Bhargav Chataut</a>

        <div className="nav-links desktop-nav">
          {links.map((link) => <a key={link} href={`#${link}`}>{link}</a>)}
        </div>

        <div className="nav-socials desktop-nav" aria-label="Social links">
          <a href="https://github.com/bhargav-chataut" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
          <a href="https://www.linkedin.com/in/bhargav-chataut/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
          <a href="https://medium.com/@bhargavchataut101" target="_blank" rel="noreferrer" aria-label="Medium"><PenLine size={18}/></a>
          <a className="nav-cta" href="#contact">Talk to me</a>
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22}/> : <Menu size={22}/>} 
        </button>
      </nav>

      {open && (
        <div className="mobile-menu shell">
          {links.map((link) => <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>{link}</a>)}
          <a href="https://github.com/bhargav-chataut" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/bhargav-chataut/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://medium.com/@bhargavchataut101" target="_blank" rel="noreferrer">Medium ↗</a>
          <a href="#contact" onClick={() => setOpen(false)}>Talk to me</a>
        </div>
      )}
    </header>
  )
}
