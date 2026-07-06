import { motion } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import Icon from './Icons'
import { SOCIALS } from '../content'

// Identità visiva per rendere subito riconoscibili le piattaforme
const STYLE = {
  Instagram: {
    tile: 'bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#962fbf] text-white',
    glow: 'radial-gradient(circle at 30% 30%, rgba(214,41,118,0.35), rgba(150,47,191,0.15) 40%, transparent 70%)',
  },
  TikTok: {
    tile: 'bg-ink-950 text-white ring-1 ring-white/15',
    glow: 'radial-gradient(circle at 30% 30%, rgba(37,244,238,0.28), rgba(254,44,85,0.2) 45%, transparent 72%)',
  },
}

export default function Social() {
  return (
    <section id="social" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="kicker justify-center">
              <span className="h-px w-8 bg-orange" />
              Seguici
            </span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <WordReveal text="Il nostro lavoro parla **ogni giorno**." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Siamo un’agenzia social: guarda cosa combiniamo sui nostri canali e seguici.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {SOCIALS.map((s, i) => {
            const st = STYLE[s.name] || {}
            return (
              <Reveal key={s.name} delay={i * 0.1} y={30}>
                <motion.a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
                >
                  {/* glow di brand al hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: st.glow }}
                  />
                  <span
                    className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${st.tile} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon name={s.icon} className="h-8 w-8" />
                  </span>
                  <span className="relative flex-1">
                    <span className="block font-display text-xl font-bold text-white">{s.name}</span>
                    <span className="block text-sm font-semibold text-orange">{s.handle}</span>
                    <span className="mt-1 block text-sm text-white/50">{s.desc}</span>
                  </span>
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-ink-950">
                    <Icon name="arrow" className="h-5 w-5" />
                  </span>
                </motion.a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
