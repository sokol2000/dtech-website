import { Reveal, Counter } from './motion'
import { STATS, VIEWS_COUNT } from '../content'

export default function Stats() {
  return (
    <section className="relative py-16">
      <div className="container-x">
        <div className="grid gap-8 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center sm:text-left">
                <div className="font-display text-6xl font-extrabold tracking-tight text-gradient-orange md:text-7xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/50">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-8 md:p-12">
            <div className="absolute inset-0 glow-radial opacity-60" />
            <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-xs font-bold uppercase tracking-[0.35em] text-white/50">
                Views generate
              </div>
              <div className="font-display text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                <Counter to={VIEWS_COUNT} duration={2.6} format />
              </div>
              <div className="flex items-center gap-2 text-orange">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-orange" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">Live</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
