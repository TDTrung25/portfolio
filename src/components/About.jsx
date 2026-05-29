import { motion } from 'framer-motion'
import Reveal, { SectionHeading } from './Reveal'
import { content } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { lang } = useLanguage()
  const t = content[lang].about

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading kicker={t.kicker} title={t.title} />

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="space-y-5 md:col-span-3">
          {t.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              {p}
            </p>
          ))}
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          {t.stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="card-hover h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <div className="font-display text-3xl font-bold gradient-text sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-[var(--color-muted)]">{s.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
