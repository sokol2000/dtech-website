import { motion } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import { TEAM } from '../content'

export default function Team() {
  return (
    <section id="team" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="kicker justify-center">
              <span className="h-px w-8 bg-orange" />
              Team management
            </span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <WordReveal text="La X-Force… cioè, il **Team**." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Un gruppo di giovani altamente qualificati. Non giudicateci dalle foto: siamo più
              belli dal vivo.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.role} delay={i * 0.1} y={30}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-ink-700 to-ink-900"
              >
                {/* placeholder ritratto */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[8rem] font-black text-white/[0.04] transition-transform duration-500 group-hover:scale-110">
                    {m.role.split(' ').pop()[0]}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mb-1 inline-flex rounded-full bg-orange/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange">
                    {m.tag}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{m.role}</h3>
                  <p className="text-sm text-white/50">{m.text}</p>
                </div>
                <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-orange opacity-0 shadow-glow transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
