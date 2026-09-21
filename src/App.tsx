import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, PenLine } from 'lucide-react'
import { motion } from 'framer-motion'
import { Nav } from './components/Nav'
import { ProjectCard } from './components/ProjectCard'
import { WritingCard } from './components/WritingCard'
import { ExperienceItem } from './components/ExperienceItem'
import { SectionHeading } from './components/SectionHeading'
import { ContactForm } from './components/ContactForm'
import { experience, projects, writing } from './data/content'
import { liveProjects, liveWriting } from './data/liveContent'

const GITHUB_USER = 'bhargav-chataut'
const MEDIUM_USER = 'bhargavchataut101'

function App() {
  const displayProjects = liveProjects.length ? liveProjects : projects
  const displayWriting = liveWriting.length ? liveWriting : writing

  return (
    <div id="top">
      <Nav />
      <main>
        <section className="hero shell">
          <motion.div className="hero-main" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <p className="eyebrow">Computer Science · AI / ML · Southern Miss</p>
            <h1>Bhargav<br/>Chataut.</h1>
            <p className="hero-statement">I’m a computer science student building and studying intelligent systems — especially deep learning, NLP, retrieval, and the software around them.</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#work">Explore my work <ArrowDown size={16}/></a>
              <a className="text-btn" href="#contact">Talk to me <ArrowUpRight size={16}/></a>
            </div>
          </motion.div>

          <motion.aside className="now-card" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .12 }}>
            <span className="now-label"><i/> NOW</span>
            <h2>Reimplementing<br/><em>World Models.</em></h2>
            <p>I’m currently reimplementing Ha & Schmidhuber’s 2018 <strong>World Models</strong> paper from scratch — working through the VAE, MDN-RNN, and controller to understand the ideas by building them.</p>
            <a href="https://arxiv.org/abs/1803.10122" target="_blank" rel="noreferrer">Read the paper <ArrowUpRight size={15}/></a>
          </motion.aside>
        </section>

        <section className="intro-line shell">
          <p>Builder. ML learner. Technical writer.</p>
          <p>Based at the University of Southern Mississippi.</p>
        </section>

        <section className="section shell" id="work">
          <SectionHeading eyebrow="Pinned on GitHub" title="Things I’ve built." />
          <div className="projects-grid">{displayProjects.map((p, i) => <ProjectCard key={p.name} project={p} index={i}/>)}</div>
          <a className="inline-link" href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={16}/></a>
        </section>

        <section className="section soft-section" id="writing">
          <div className="shell">
            <SectionHeading eyebrow="Latest on Medium" title="Notes from what I’m learning." />
            <div className="writing-list">{displayWriting.map((w, i) => <WritingCard key={w.href} {...w} index={i}/>)}</div>
            <a className="inline-link" href={`https://medium.com/@${MEDIUM_USER}`} target="_blank" rel="noreferrer">All writing on Medium <ArrowUpRight size={16}/></a>
          </div>
        </section>

        <section className="section shell" id="experience">
          <SectionHeading eyebrow="Experience" title="Learning by doing." />
          <div className="experience-list">{experience.map((item) => <ExperienceItem key={item.org} {...item}/>)}</div>
        </section>

        <section className="section soft-section" id="about">
          <div className="shell about-grid">
            <div>
              <SectionHeading eyebrow="About" title="A little more human." />
              <p className="about-copy">I’m a Computer Science student at the University of Southern Mississippi. I’m most interested in understanding how intelligent systems actually work, then turning that understanding into useful software.</p>
              <p className="about-copy">I learn best by building from first principles. Outside class, I write about AI/ML, help run campus communities, play badminton, and keep finding projects that are slightly beyond what I already know.</p>
            </div>
            <div className="skills-card">
              <span className="mini-label">TOOLS I REACH FOR</span>
              <div className="skill-cloud">
                {['Python','PyTorch','scikit-learn','RAG','NLP','FastAPI','React','TypeScript','SQL','Docker','Azure','Streamlit','OpenCV','Git'].map((s)=><span key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="contact shell" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">Talk to me</p>
            <h2>Have an idea,<br/>question, or <em>hello?</em></h2>
            <p>Write to me here. It lands directly in my inbox.</p>
            <a className="contact-email" href="mailto:bhargavchataut.bc@gmail.com"><Mail size={17}/> bhargavchataut.bc@gmail.com</a>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="footer shell">
        <span>© 2026 Bhargav Chataut</span>
        <div className="footer-socials">
          <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
          <a href="https://www.linkedin.com/in/bhargav-chataut/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
          <a href={`https://medium.com/@${MEDIUM_USER}`} target="_blank" rel="noreferrer"><PenLine size={16}/> Medium</a>
        </div>
      </footer>
    </div>
  )
}

export default App
