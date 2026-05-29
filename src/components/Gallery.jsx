import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import Reveal from './Reveal'
import Photo from './Photo'
import { content, galleryImages } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

export default function Gallery() {
  const { lang } = useLanguage()
  const t = content[lang].gallery

  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-4 pb-8 sm:px-8">
      <Reveal className="mb-10 text-center">
        <p className="mb-3 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-[var(--color-accent)]">
          <FiAward /> {t.kicker}
        </p>
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{t.title}</h2>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-3">
        {t.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
          >
            <Photo
              src={galleryImages[i]}
              alt={item.caption}
              caption={item.caption}
              sub={item.sub}
              aspect="aspect-[4/3]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
