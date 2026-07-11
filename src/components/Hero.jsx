import { motion } from 'framer-motion'
import { WordReveal, MagneticButton } from './motion'
import Icon from './Icons'
import { CONTACT, SOCIALS } from '../content'

const waLink = `https://wa.me/${CONTACT.whatsapp}`

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-[4.5rem] sm:pb-0">
      {/* Sfondo: bagliore + anelli concentrici (anchor geometrico discreto) + grana */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-6%] h-[70vh] w-[70vh] -translate-x-1/2 glow-radial" />
        <div className="absolute left-1/2 top-1/2 h-[132vmin] w-[132vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />
        <div className="absolute left-1/2 top-1/2 h-[92vmin] w-[92vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]" />
        <div className="absolute left-1/2 top-1/2 h-[54vmin] w-[54vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055]" />
        <div className="grain-overlay absolute inset-0 opacity-[0.06]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="container-x">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="font-display text-[1.9rem] font-extrabold leading-[1.18] tracking-tight min-[410px]:text-[2.05rem] sm:text-5xl sm:leading-[1.14] md:text-6xl md:leading-[1.12] lg:text-7xl">
            <span className="block whitespace-nowrap">
              <WordReveal text="Pensiamo in **grande**," delay={0.2} />
            </span>
            <span className="block whitespace-nowrap">
              <WordReveal text="per offrire" delay={0.45} />
            </span>
            <span className="block whitespace-nowrap">
              <WordReveal text="**grandi** **soluzioni**." delay={0.7} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="mt-8 flex justify-center sm:mt-10"
          >
            <MagneticButton
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-[0.95rem] font-bold text-ink-950 shadow-glow animate-pulse-glow sm:gap-3 sm:px-10 sm:py-5 sm:text-[1.05rem]"
            >
              <Icon name="whatsapp" className="h-[1.15rem] w-[1.15rem] sm:h-5 sm:w-5" />
              Scrivici su WhatsApp
              <Icon name="arrow" className="h-[1.15rem] w-[1.15rem] transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </MagneticButton>
          </motion.div>

          {/* Social — nell'hero su mobile (su desktop stanno nella nav) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7 }}
            className="mt-11 flex flex-col items-center gap-3.5 md:hidden"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45">
              Guarda chi siamo
            </span>
            <div className="flex items-center gap-3.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="social-pulse flex h-11 w-11 items-center justify-center rounded-full border border-orange/70 bg-orange/10 text-white transition-colors hover:bg-orange hover:text-ink-950"
                >
                  <Icon name={s.icon} className="h-[1.15rem] w-[1.15rem]" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 md:bottom-8"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scorri</span>
        <div className="flex h-9 w-5 justify-center rounded-full border border-white/20 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-orange"
          />
        </div>
      </motion.div>
    </section>
  )
}
