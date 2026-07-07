import { motion } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import Icon from './Icons'
import { CASES } from '../content'

export default function CasiStudio() {
  return (
    <section id="clienti" className="relative py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="kicker justify-center">
              I nostri clienti
            </span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <WordReveal text="Risultati che **parlano**." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Aziende che hanno scelto di crescere con noi e hanno ottenuto risultati misurabili.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map((c, i) => (
            <Reveal key={c.client} delay={(i % 4) * 0.08} y={30}>
              <motion.button
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800 text-left"
                aria-label={`Caso studio ${c.client}`}
              >
                {/* frame video verticale (placeholder) */}
                <div className="relative aspect-[9/16] overflow-hidden bg-gradient-to-b from-ink-700 via-ink-800 to-ink-950">
                  <div className="absolute inset-0 glow-radial opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-ink-950/50 backdrop-blur transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-ink-950">
                      <Icon name="play" className="ml-1 h-6 w-6" />
                    </span>
                  </div>
                  <div className="absolute left-3 top-3 rounded-full bg-ink-950/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-orange backdrop-blur">
                    {c.tag}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 to-transparent p-4">
                    <div className="text-xs font-medium text-white/50">Caso studio</div>
                    <div className="font-display text-lg font-bold text-white">{c.client}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  <span className="text-sm font-medium text-white/70">{c.result}</span>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-white/40">
            I video dei casi studio verranno collegati a breve.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
