import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ kicker, title }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-3 font-mono text-sm tracking-widest text-[var(--color-accent)] uppercase">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent2)]" />
    </Reveal>
  )
}
