import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal, { SectionHeading } from './Reveal'
import { content } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
  const { lang } = useLanguage()
  const t = content[lang].projects

  return (
    <section id="projects" className="relative bg-[var(--color-bg-soft)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.kicker} title={t.title} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="card-hover group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="font-mono text-xs text-[var(--color-accent)]">
                    0{i + 1}
                  </div>
                  <FiArrowUpRight className="text-lg text-[var(--color-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
                </div>

                <h3 className="mt-3 font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-accent)]/90">{p.subtitle}</p>

                <ul className="mt-4 flex-1 space-y-2">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[var(--color-bg)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
