import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import { METHOD_STEPS } from '../content'

export default function Metodo() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 65%', 'end 60%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="metodo" className="relative py-16 md:py-24">
      <div className="container-x grid gap-16 lg:grid-cols-2">
        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* binario */}
          <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-white/10" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-orange shadow-glow"
          />
          <ul className="space-y-7">
            {METHOD_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05} y={20}>
                <li className="flex items-start gap-5">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange/50 bg-ink-950 text-xs font-bold text-orange">
                    {step.n}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-white/50">{step.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Racconto */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="kicker">
              Il nostro metodo
            </span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            <WordReveal text="Il Percorso **Kaizen**." />
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/65">
            <Reveal delay={0.1}>
              <p>
                Accompagniamo i nostri clienti seguendo la filosofia{' '}
                <span className="font-semibold text-white">KAIZEN</span>, l’arte giapponese del
                miglioramento continuo.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Partendo dall’ascolto delle tue esigenze, progettiamo un percorso di marketing
                diretto, strategico e orientato agli obiettivi: un sistema digitale integrato che
                unisce strategia, branding e sviluppo.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white">
                Una soluzione pensata per imprenditori e professionisti che vogliono evolvere in
                modo costante e consapevole.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
