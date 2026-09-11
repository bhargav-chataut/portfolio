import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, PenLine } from 'lucide-react'
import { motion } from 'framer-motion'
import { Nav } from './components/Nav'
import { ProjectCard } from './components/ProjectCard'
import { WritingCard } from './components/WritingCard'
import { ExperienceItem } from './components/ExperienceItem'
import { SectionHeading } from './components/SectionHeading'
import { experience, projects, writing } from './data/content'

function App() {
  return (
    <div id="top">
      <Nav />
      <main>
        <section className="hero shell">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
            <div className="status"><span className="status-dot"/> Building at the intersection of AI + software</div>
            <p className="kicker">BHARGAV CHATAUT / COMPUTER SCIENCE @ SOUTHERN MISS</p>
            <h1>I build <em>intelligent</em><br/>things that work.</h1>
            <p className="hero-copy">Computer Science student focused on AI/ML, retrieval systems, and practical software. I like taking ideas from messy prototype to something people can actually use.</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#work">See my work <ArrowDown size={16}/></a>
              <a className="ghost-btn" href="https://github.com/bhargav-chataut" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            </div>
          </motion.div>

          <motion.aside className="hero-card" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .65, delay: .12 }}>
            <div className="terminal-bar"><span/><span/><span/></div>
            <div className="terminal-body">
              <p><b>$</b> whoami</p>
              <p className="terminal-answer">Bhargav — CS student, builder, ML tinkerer.</p>
              <p><b>$</b> currently</p>
              <p className="terminal-answer">Shipping AI projects, writing what I learn, and getting better at the fundamentals.</p>
              <p><b>$</b> interests</p>
              <p className="terminal-answer">RAG · NLP · deep learning · systems · product engineering</p>
              <span className="cursor">▋</span>
            </div>
          </motion.aside>
        </section>

        <section className="signal-strip">
          <div className="shell signal-grid">
            <span>People’s Choice Award · Southern Miss Hackathon</span>
            <span>CodePath × Anthropic AI Fellow</span>
            <span>Technical writer on Medium</span>
          </div>
        </section>

        <section className="section shell" id="work">
          <SectionHeading eyebrow="01 / SELECTED WORK" title="Projects I care about." />
          <div className="projects-grid">{projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i}/>)}</div>
        </section>

        <section className="section section-muted" id="writing">
          <div className="shell">
            <SectionHeading eyebrow="02 / WRITING" title="I write to understand." />
            <div className="writing-list">{writing.map((w, i) => <WritingCard key={w.title} {...w} index={i}/>)}</div>
            <a className="inline-link" href="https://medium.com/@bhargavchataut101" target="_blank" rel="noreferrer">Read everything on Medium <ArrowUpRight size={16}/></a>
          </div>
        </section>

        <section className="section shell" id="experience">
          <SectionHeading eyebrow="03 / EXPERIENCE" title="Learning by shipping." />
          <div className="experience-list">{experience.map((item) => <ExperienceItem key={item.org} {...item}/>)}</div>
        </section>

        <section className="section section-muted" id="about">
          <div className="shell about-grid">
            <div>
              <SectionHeading eyebrow="04 / ABOUT" title="Curious, technical, still learning." />
              <p className="about-copy">I’m a Computer Science student at the University of Southern Mississippi. My strongest interests are NLP, deep learning, retrieval, and the engineering needed to make ML systems useful outside a notebook.</p>
              <p className="about-copy">Outside class, I write technical articles, help run campus organizations, play badminton, and chase projects that force me to learn something new.</p>
            </div>
            <div className="skills-card">
              <span className="mini-label">CURRENT TOOLKIT</span>
              <div className="skill-cloud">
                {['Python','PyTorch','scikit-learn','RAG','NLP','FastAPI','React','TypeScript','SQL','Docker','Azure','Streamlit','OpenCV','Git/GitHub'].map((s)=><span key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="contact shell">
          <p className="kicker">05 / CONTACT</p>
          <h2>Let’s build something<br/><em>worth shipping.</em></h2>
          <a className="contact-email" href="mailto:bhargavchataut.bc@gmail.com">bhargavchataut.bc@gmail.com <ArrowUpRight size={22}/></a>
          <div className="socials">
            <a href="https://github.com/bhargav-chataut" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
            <a href="https://www.linkedin.com/in/bhargav-chataut/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
            <a href="https://medium.com/@bhargavchataut101" target="_blank" rel="noreferrer"><PenLine size={18}/> Medium</a>
            <a href="mailto:bhargavchataut.bc@gmail.com"><Mail size={18}/> Email</a>
          </div>
        </section>
      </main>
      <footer className="footer shell"><span>© 2026 Bhargav Chataut</span><span>Designed + built with intent.</span></footer>
    </div>
  )
}

export default App
