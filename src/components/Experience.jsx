import { FiBriefcase } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'
import Reveal, { SectionHeading } from './Reveal'
import { content } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { lang } = useLanguage()
  const t = content[lang].experience

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading kicker={t.kicker} title={t.title} />

      <div className="relative mx-auto max-w-3xl">
        {/* timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent sm:left-[23px]" />

        <div className="space-y-10">
          {t.jobs.map((job, i) => (
            <Reveal key={i} delay={0.05} className="relative pl-14 sm:pl-16">
              <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] sm:h-12 sm:w-12">
                <FiBriefcase />
              </span>

              <div className="card-hover rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                    <p className="text-[var(--color-accent)]">
                      {job.company}
                      {job.meta && <span className="text-[var(--color-muted)]"> · {job.meta}</span>}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 font-mono text-xs ${
                      job.current
                        ? 'bg-[var(--color-accent)]/15 text-[var(--color-accent)]'
                        : 'border border-[var(--color-border)] text-[var(--color-muted)]'
                    }`}
                  >
                    {job.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-muted)]">
                      <HiCheckCircle className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
