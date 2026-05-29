import { useState } from 'react'
import { FiImage } from 'react-icons/fi'

export default function Photo({
  src,
  alt,
  caption,
  sub,
  aspect = 'aspect-[4/3]',
  className = '',
}) {
  const [error, setError] = useState(false)

  return (
    <figure
      className={`group relative ${className}`}
    >
      {/* glow behind frame */}
      <div className="glow left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent2)] opacity-0 transition-opacity duration-500 group-hover:opacity-30" />

      <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)] transition-colors duration-300 group-hover:border-[var(--color-accent)]/50">
        <div className={`relative ${aspect} overflow-hidden rounded-xl bg-[var(--color-bg)]`}>
          {error ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--color-muted)]">
              <FiImage className="text-3xl" />
              <code className="font-mono text-xs text-[var(--color-accent)]">{src}</code>
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              onError={() => setError(true)}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
          )}

          {/* caption overlay */}
          {caption && !error && (
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 pt-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-display text-sm font-semibold text-white">{caption}</p>
              {sub && <p className="mt-0.5 text-xs text-white/70">{sub}</p>}
            </figcaption>
          )}
        </div>
      </div>
    </figure>
  )
}
