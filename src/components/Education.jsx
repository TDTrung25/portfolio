import { FiAward, FiBookOpen, FiGlobe } from 'react-icons/fi'
import Reveal, { SectionHeading } from './Reveal'
import { content } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

export default function Education() {
  const { lang } = useLanguage()
  const t = content[lang].education

  return (
    <section id="education" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading kicker={t.kicker} title={t.title} />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Education */}
        <Reveal>
          <Card icon={<FiBookOpen />} title={t.eduTitle}>
            <div className="space-y-5">
              {t.schools.map((s, i) => (
                <div key={i} className="border-l-2 border-[var(--color-border)] pl-4">
                  <h4 className="font-medium text-[var(--color-text)]">{s.degree}</h4>
                  <p className="text-sm text-[var(--color-accent)]">{s.school}</p>
                  <p className="font-mono text-xs text-[var(--color-muted)]">{s.period}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* Certifications */}
        <Reveal delay={0.08}>
          <Card icon={<FiAward />} title={t.certTitle}>
            <div className="space-y-3">
              {t.certs.map((c, i) => (
                <div key={i} className="flex items-center justify-between gap-3 rounded-lg bg-[var(--color-bg)] px-4 py-3">
                  <span className="text-sm text-[var(--color-text)]">{c.name}</span>
                  <span className="shrink-0 font-mono text-xs text-[var(--color-muted)]">{c.issuer}</span>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* Languages */}
        <Reveal delay={0.1}>
          <Card icon={<FiGlobe />} title={t.languagesTitle}>
            <div className="space-y-4">
              {t.languages.map((l, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--color-text)]">{l.name}</span>
                  <span className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-xs text-[var(--color-accent)]">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

function Card({ icon, title, children }) {
  return (
    <div className="card-hover h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
          {icon}
        </span>
        <h3 className="font-display text-xl font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  )
}
