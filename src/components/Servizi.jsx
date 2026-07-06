import { motion } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import Icon from './Icons'
import { SERVICES } from '../content'

export default function Servizi() {
  return (
    <section id="servizi" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[50vh] w-[50vh] glow-radial opacity-40" />
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="kicker justify-center">
              <span className="h-px w-8 bg-orange" />
              Cosa facciamo
            </span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <WordReveal text="Smettila di chiamarli “Servizi”." />
            <br />
            <WordReveal text="Chiamali **Investimenti**." delay={0.2} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Un ecosistema progettato con un solo scopo: eliminare gli sprechi e massimizzare la
              crescita.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08} y={30}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card group h-full p-6"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-ink-950 group-hover:shadow-glow">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{s.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
