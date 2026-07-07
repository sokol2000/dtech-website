import { Reveal, Counter } from './motion'
import { STATS, VIEWS_COUNT } from '../content'

export default function Stats() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="container-x">
        {/* Metriche */}
        <div className="grid gap-8 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display text-6xl font-extrabold tracking-tight text-white md:text-7xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contatore views: numero dominante → spiegazione → contesto */}
        <Reveal delay={0.2}>
          <div className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-900 p-10 text-center md:mt-16 md:p-14">
            <div className="pointer-events-none absolute inset-0 glow-radial opacity-40" />
            <div className="relative">
              <div className="font-display text-6xl font-extrabold tracking-tight text-white md:text-7xl">
                <Counter to={VIEWS_COUNT} duration={2.6} format />
              </div>
              <p className="mx-auto mt-4 max-w-md text-lg font-medium text-white/75">
                Visualizzazioni generate per i nostri clienti
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange" />
                </span>
                Aggiornato in tempo reale
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
