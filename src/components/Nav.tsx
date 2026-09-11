import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = ['work', 'writing', 'experience', 'about']

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Bhargav Chataut home">BC<span>.</span></a>
        <div className="nav-links desktop-nav">
          {links.map((link) => <a key={link} href={`#${link}`}>{link}</a>)}
          <a className="nav-cta" href="mailto:bhargavchataut.bc@gmail.com">say hello ↗</a>
        </div>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22}/> : <Menu size={22}/>} 
        </button>
      </nav>
      {open && (
        <div className="mobile-menu shell">
          {links.map((link) => <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>{link}</a>)}
          <a href="mailto:bhargavchataut.bc@gmail.com">say hello ↗</a>
        </div>
      )}
    </header>
  )
}
