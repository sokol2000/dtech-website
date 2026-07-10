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

/* Sottolineatura "a gesso": due tratti arancioni irregolari, texture realistica. */
function ChalkUnderline({ children }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.06em] left-[-3%] h-[0.32em] w-[106%] overflow-visible"
        viewBox="0 0 200 14"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id="chalkFx" x="-10%" y="-60%" width="120%" height="220%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9 1.3" numOctaves="2" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
          </filter>
        </defs>
        <g filter="url(#chalkFx)" stroke="#ff5100" strokeLinecap="round" fill="none">
          <path d="M5 8 C 46 4.5 92 9.5 132 7 S 186 6 196 8" strokeWidth="5.5" opacity="0.92" />
          <path d="M9 10.5 C 62 8.5 112 11.5 160 9.5 S 190 9.5 194 10.5" strokeWidth="2.4" opacity="0.5" />
        </g>
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
              <span className="text-white">ascoltiamo, analizziamo, proponiamo</span>. Ogni cliente ha
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
            <span className="font-serif text-[1.45rem] font-medium italic leading-[1.4] tracking-tight text-white sm:text-[1.9rem] md:text-[2.2rem] md:leading-[1.35]">
              Il <ChalkUnderline>marketing</ChalkUnderline> non è più questione di ciò che sai
              produrre, ma della storia che sai raccontare.
            </span>
            <span className="ml-1 self-end font-serif text-[2rem] not-italic leading-none text-orange sm:ml-2 sm:text-[2.6rem] md:text-[3rem]">
              ”
            </span>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  )
}
