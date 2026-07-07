import { motion } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import Icon from './Icons'
import { CASES } from '../content'

export default function CasiStudio() {
  return (
    <section id="clienti" className="relative py-12 md:py-14">
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

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map((c, i) => (
            <Reveal key={c.client} delay={(i % 4) * 0.08} y={30}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-[border-color,background-color,box-shadow] duration-300 hover:border-orange/40 hover:bg-white/[0.05] hover:shadow-2xl"
              >
                {/* Logo cliente (chip circolare) */}
                <div className="relative h-28 w-28 overflow-hidden rounded-full bg-ink-950 ring-1 ring-white/10 transition-transform duration-500 ease-out group-hover:scale-105">
                  <img
                    src={c.logo}
                    alt={c.client}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <span className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-orange">
                  {c.tag}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-bold leading-tight text-white">
                  {c.client}
                </h3>

                {/* Social */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={c.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Instagram di ${c.client}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-orange hover:bg-orange hover:text-ink-950"
                  >
                    <Icon name="instagram" className="h-5 w-5" />
                  </a>
                  <a
                    href={c.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`TikTok di ${c.client}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-orange hover:bg-orange hover:text-ink-950"
                  >
                    <Icon name="tiktok" className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
