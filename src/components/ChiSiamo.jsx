import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Reveal } from './motion'

/* Fade-in leggerissimo (solo opacità + micro-shift), stile editoriale. */
function FadeIn({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Sottolineatura a gesso: tratto dritto e deciso, con grana e bordi ruvidi. */
function ChalkUnderline({ children }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.04em] left-[-2%] h-[0.3em] w-[104%] overflow-visible"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id="chalkStroke" x="-6%" y="-100%" width="112%" height="300%">
            {/* 1 — bordi sfrangiati da gesso (displacement fine, la linea resta dritta) */}
            <feTurbulence type="fractalNoise" baseFrequency="0.85 0.9" numOctaves="2" seed="6" result="edge" />
            <feDisplacementMap in="SourceGraphic" in2="edge" scale="3" result="rough" />
            {/* 2 — grana: variazione morbida di opacità, senza mai azzerarla */}
            <feTurbulence type="fractalNoise" baseFrequency="0.5 0.55" numOctaves="3" seed="12" result="grain" />
            <feColorMatrix
              in="grain"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0.7 0.32"
              result="grainA"
            />
            <feComposite in="rough" in2="grainA" operator="in" />
          </filter>
        </defs>
        <path
          d="M4 7 L196 6"
          stroke="#ff5100"
          strokeWidth="9"
          strokeLinecap="round"
          filter="url(#chalkStroke)"
        />
      </svg>
    </span>
  )
}

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="relative py-12 md:py-14">
      <div className="container-x">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="kicker justify-center">Chi siamo</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 font-display text-2xl font-extrabold leading-[1.14] tracking-tight sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem]">
              Creatività, intrattenimento, produzione:
              <br className="hidden md:block" /> il punto di partenza per{' '}
              <span className="text-gradient-orange">fare la differenza</span>
            </h2>
          </Reveal>
        </div>

        {/* Manifesto dell'agenzia */}
        <div className="mx-auto mt-6 max-w-3xl text-center md:mt-8">
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Siamo un’agenzia creativa che costruisce campagne di comunicazione, gestisce i social,
              produce contenuti e affianca i brand come <span className="text-white">advisor</span>{' '}
              sulla loro identità. Grazie al nostro{' '}
              <span className="text-orange">Metodo Kaizen</span> non ci limitiamo a eseguire:{' '}
              <span className="text-white">ascoltiamo, analizziamo e proponiamo</span>. Ogni cliente ha
              una voce diversa da trovare e amplificare: il nostro compito è renderla riconoscibile,
              coerente e capace di durare oltre la singola campagna.
            </p>
          </Reveal>
        </div>

        {/* Frase iconica — corsivo elegante tra apici arancioni, centrata */}
        <FadeIn className="mt-12 md:mt-16">
          <blockquote className="mx-auto flex max-w-3xl items-start justify-center px-2 text-center">
            <span className="mr-1 font-serif text-[2rem] not-italic leading-none text-orange sm:mr-2 sm:text-[2.6rem] md:text-[3rem]">
              “
            </span>
            <span className="font-serif text-[1.45rem] font-semibold italic leading-[1.4] tracking-tight text-white sm:text-[1.9rem] md:text-[2.2rem] md:leading-[1.35]">
              Il <ChalkUnderline>marketing</ChalkUnderline> non è più questione di ciò che sai
              produrre, ma della storia che sai raccontare.
            </span>
            <span className="ml-1 self-end font-serif text-[2rem] not-italic leading-none text-orange sm:ml-2 sm:text-[2.6rem] md:text-[3rem]">
              ”
            </span>
          </blockquote>
          <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/40 md:mt-6">
            — Seth Godin
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
