import Reveal from './Reveal'

export default function Section({ eyebrow, title, body, children, className = '', innerClassName = '' }) {
  return (
    <section className={`px-6 py-16 sm:px-8 lg:px-12 lg:py-24 ${className}`}>
      <div className={`mx-auto w-full max-w-7xl ${innerClassName}`}>
        {(eyebrow || title || body) && (
          <Reveal className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-white/45">{eyebrow}</p>
            )}
            {title && <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">{title}</h2>}
            {body && <p className="mt-5 text-base leading-8 text-white/68 sm:text-lg">{body}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
