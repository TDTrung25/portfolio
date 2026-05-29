import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import { content, social } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()
  const t = content[lang].footer

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} · {t.built}
        </p>
        <div className="flex items-center gap-4 text-lg text-[var(--color-muted)]">
          <a href={social.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--color-accent)]" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${social.email}`} className="transition-colors hover:text-[var(--color-accent)]" aria-label="Email">
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
