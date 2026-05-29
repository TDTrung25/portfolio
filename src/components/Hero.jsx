import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi'
import { FiMapPin, FiDownload } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { content, social, cvFile, avtImage } from '../data/content'
import { useLanguage } from '../context/LanguageContext'
import Photo from './Photo'

function useTypewriter(words, speed = 90, pause = 1600) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        )
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, speed, pause])

  return text
}

export default function Hero() {
  const { lang } = useLanguage()
  const t = content[lang].hero
  const about = content[lang].about
  const typed = useTypewriter(t.roles)

  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-grid pt-20 pb-10 sm:min-h-[85vh]">
      <div className="glow left-[-10%] top-[-10%] h-[420px] w-[420px] bg-[var(--color-accent)]" />
      <div className="glow right-[-5%] bottom-[0%] h-[380px] w-[380px] bg-[var(--color-accent2)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-sm text-[var(--color-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {lang === 'en' ? 'Available for opportunities' : 'Sẵn sàng cho cơ hội mới'}
          </span>

          <p className="mt-7 font-mono text-base text-[var(--color-accent)]">{t.greeting}</p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {t.name}
          </h1>

          <div className="mt-4 flex h-9 items-center font-display text-xl text-[var(--color-text)]/90 sm:text-2xl">
            <span className="gradient-text font-semibold">{typed}</span>
            <span className="ml-1 inline-block h-7 w-0.5 animate-pulse bg-[var(--color-accent)] sm:h-8" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            {t.tagline}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-[var(--color-muted)]">
            <FiMapPin className="text-[var(--color-accent)]" /> {t.location}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[#0a0a0f] transition-all hover:shadow-[0_8px_30px_-8px_var(--color-accent)] hover:brightness-110"
            >
              {t.ctaPrimary}
              <HiArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={cvFile}
              download
              className="group inline-flex items-center gap-2 rounded-xl border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-6 py-3 text-sm font-semibold text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)]/20"
            >
              <FiDownload className="transition-transform group-hover:translate-y-0.5" />
              {about.cvButton}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
            >
              <HiOutlineMail /> {t.ctaSecondary}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-xl text-[var(--color-muted)]">
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--color-accent)]" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${social.email}`} className="transition-colors hover:text-[var(--color-accent)]" aria-label="Email">
              <HiOutlineMail />
            </a>
          </div>
        </motion.div>

        {/* Right: portrait photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <Photo src={avtImage} alt={about.photoAlt} aspect="aspect-[3/4]" />
        </motion.div>
      </div>
    </section>
  )
}
