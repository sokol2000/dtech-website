import { motion } from 'framer-motion'
import { Reveal } from './motion'
import Icon from './Icons'
import { CASES } from '../content'

export default function CasiStudio() {
  return (
    <section id="clienti" className="relative py-12 md:py-14">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="kicker justify-center">
              I nostri clienti
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-[1.45rem] font-extrabold leading-[1.45] tracking-tight text-white sm:text-3xl sm:leading-[1.5] md:text-[2.5rem]">
              Chi smette di fare pubblicità per risparmiare soldi è come se{' '}
              <span className="text-orange">fermasse l’orologio per risparmiare tempo</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              — Henry Ford
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Aziende che hanno scelto il nostro metodo.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:gap-5 md:mt-14 lg:grid-cols-4">
          {CASES.map((c, i) => (
            <Reveal key={c.client} delay={(i % 4) * 0.08} y={30}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center transition-[border-color,background-color,box-shadow] duration-300 hover:border-orange/40 hover:bg-white/[0.05] hover:shadow-2xl sm:p-6"
              >
                {/* Logo cliente (chip circolare, ring che si accende in hover) */}
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-ink-950 ring-1 ring-orange/25 transition-all duration-500 ease-out group-hover:scale-105 group-hover:ring-orange group-hover:shadow-glow sm:h-24 sm:w-24">
                  <img
                    src={c.logo}
                    alt={c.client}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Nome: una riga su desktop; su mobile spazio riservato a 2 righe
                    così le card della stessa fila restano identiche */}
                <h3 className="mt-4 flex min-h-[2.5em] items-center justify-center font-display text-[0.95rem] font-bold leading-tight text-white sm:mt-5 sm:min-h-0 sm:whitespace-nowrap">
                  {c.client}
                </h3>

                {/* Social — arancioni: sono le CTA della card */}
                <div className="mt-auto flex items-center gap-3 pt-4 sm:pt-5">
                  <a
                    href={c.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Instagram di ${c.client}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-orange/60 bg-orange/10 text-orange transition-all duration-300 hover:bg-orange hover:text-ink-950"
                  >
                    <Icon name="instagram" className="h-5 w-5" />
                  </a>
                  <a
                    href={c.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`TikTok di ${c.client}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-orange/60 bg-orange/10 text-orange transition-all duration-300 hover:bg-orange hover:text-ink-950"
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
