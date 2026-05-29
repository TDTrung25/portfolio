import { HiOutlineMail } from 'react-icons/hi'
import { FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import Reveal, { SectionHeading } from './Reveal'
import { content, social } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { lang } = useLanguage()
  const t = content[lang].contact

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--color-bg-soft)] py-24 sm:py-32">
      <div className="glow left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent2)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <SectionHeading kicker={t.kicker} title={t.title} />

        <Reveal>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            {t.text}
          </p>

          <a
            href={`mailto:${t.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-[#0a0a0f] transition-all hover:shadow-[0_8px_30px_-8px_var(--color-accent)] hover:brightness-110"
          >
            <HiOutlineMail className="text-lg" /> {t.cta}
          </a>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <ContactCard icon={<HiOutlineMail />} label="Email" value={t.email} href={`mailto:${t.email}`} />
            <ContactCard icon={<FiPhone />} label="Phone" value={t.phone} href={`tel:${t.phone.replace(/\s/g, '')}`} />
            <ContactCard icon={<FaLinkedin />} label="LinkedIn" value="trung-tran255" href={social.linkedin} external />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="card-hover flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-lg text-[var(--color-accent)]">
        {icon}
      </span>
      <span className="font-mono text-xs uppercase tracking-wide text-[var(--color-muted)]">{label}</span>
      <span className="break-all text-sm text-[var(--color-text)]">{value}</span>
    </a>
  )
}
