import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { content } from '../data/content'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact']

export default function Navbar() {
  const { lang, toggle } = useLanguage()
  const { theme, toggle: toggleTheme } = useTheme()
  const t = content[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="gradient-text">TĐT</span>
          <span className="text-[var(--color-muted)]">.dev</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => go(s)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {t[s]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggle={toggleTheme} />
          <LangToggle lang={lang} toggle={toggle} />
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] md:hidden"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col px-5 py-3">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => go(s)}
              className="rounded-lg px-3 py-3 text-left text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {t[s]}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}

function ThemeToggle({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -18, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 18, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {theme === 'dark' ? <FiMoon /> : <FiSun />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

function LangToggle({ lang, toggle }) {
  return (
    <button
      onClick={toggle}
      className="relative flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-0.5 text-xs font-semibold"
      aria-label="Toggle language"
    >
      <span className="relative z-10 px-2.5 py-1 transition-colors" style={{ color: lang === 'en' ? '#0a0a0f' : 'var(--color-muted)' }}>
        EN
      </span>
      <span className="relative z-10 px-2.5 py-1 transition-colors" style={{ color: lang === 'vi' ? '#0a0a0f' : 'var(--color-muted)' }}>
        VN
      </span>
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-[var(--color-accent)]"
        style={{ left: lang === 'en' ? '2px' : 'calc(50% )' }}
      />
    </button>
  )
}
