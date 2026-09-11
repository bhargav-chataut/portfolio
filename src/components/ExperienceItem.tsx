export function ExperienceItem({ org, role, period, text }: { org: string; role: string; period: string; text: string }) {
  return (
    <article className="experience-item">
      <div><h3>{org}</h3><p className="experience-role">{role}</p></div>
      <p className="experience-text">{text}</p>
      <span className="experience-period">{period}</span>
    </article>
  )
}
