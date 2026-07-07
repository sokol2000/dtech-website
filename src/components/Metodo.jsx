import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import SectionHeader from './SectionHeader'
import Icon from './Icons'
import { METHOD_STEPS } from '../content'

/*
 * Il Percorso Kaizen — roadmap verticale, non un elenco.
 * Desktop: i nodi corrono sulla linea centrale, i contenuti si alternano
 *          sinistra/destra (zig-zag) → percorso, non lista.
 * Mobile:  timeline unica centrata (nessuna alternanza).
 * La linea è segmentata (connettori tra i nodi): resta pulita sopra il
 * glass-panel e si "disegna" entrando in vista → senso di avanzamento.
 * Solo transform/opacity → animazioni GPU-friendly, niente layout shift.
 */

// Connettore verticale che si disegna (scaleY 0→1) quando entra in vista.
function Connector() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  return (
    <div
      ref={ref}
      className="relative h-11 w-px overflow-hidden rounded-full bg-white/10 transition-shadow duration-500 group-hover:shadow-glow md:h-14"
    >
      <motion.span
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 origin-top bg-orange-400 shadow-glow transition-opacity duration-500"
      />
    </div>
  )
}

export default function Metodo() {
  return (
    <section id="metodo" className="relative py-12 md:py-14">
      <div className="container-x">
        <SectionHeader
          kicker="Il nostro metodo"
          title={<WordReveal text="Il Percorso **Kaizen**." />}
          sub={
            <>
              Ogni progetto segue un processo preciso, perché la crescita non nasce
              dall’improvvisazione.
            </>
          }
        />

        {/* Roadmap centrata: elemento visivo dominante della sezione */}
        <ol className="mx-auto mt-12 flex max-w-3xl flex-col items-center md:mt-16">
          {METHOD_STEPS.map((step, i) => {
            const left = i % 2 === 0
            return (
              <li key={step.n} className="group w-full">
                {/* riga nodo + contenuto (alternato su desktop) */}
                <div className="grid grid-cols-1 justify-items-center gap-y-3 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-x-8 md:gap-y-0">
                  {/* Nodo numerato */}
                  <div className="md:col-start-2 md:row-start-1 md:justify-self-center">
                    <Reveal delay={i * 0.06} y={14}>
                      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-orange/60 bg-ink-900 font-display text-sm font-bold text-orange transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-orange group-hover:shadow-glow">
                        {step.n}
                      </div>
                    </Reveal>
                  </div>

                  {/* Titolo + descrizione */}
                  <div
                    className={`w-full text-center md:row-start-1 ${
                      left
                        ? 'md:col-start-1 md:justify-self-end md:text-right'
                        : 'md:col-start-3 md:justify-self-start md:text-left'
                    }`}
                  >
                    <Reveal delay={i * 0.06 + 0.05} y={14}>
                      <div className="mx-auto max-w-xs md:mx-0 md:max-w-[17rem]">
                        <h3 className="font-display text-xl font-bold leading-snug text-white/90 transition-colors duration-300 group-hover:text-white md:text-[1.35rem]">
                          {step.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/70">
                          {step.text}
                        </p>
                      </div>
                    </Reveal>
                  </div>
                </div>

                {/* Connettore centrale verso il nodo successivo */}
                <div className="grid justify-items-center py-1 md:grid-cols-[1fr_auto_1fr]">
                  <div className="md:col-start-2 md:justify-self-center">
                    <Connector />
                  </div>
                </div>
              </li>
            )
          })}

          {/* Conclusione: chiude visivamente il percorso */}
          <li className="grid justify-items-center text-center">
            <Reveal delay={0.1} y={14}>
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-orange text-ink-950 shadow-glow">
                <Icon name="check" className="h-6 w-6" />
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-6 max-w-sm">
                <h3 className="font-display text-xl font-bold leading-snug text-white md:text-[1.35rem]">
                  La tua presenza digitale è pronta a crescere.
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/50">
                  Da questo momento inizia il miglioramento continuo.
                </p>
              </div>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  )
}
