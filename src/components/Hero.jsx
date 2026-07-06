import { motion } from 'framer-motion'
import { WordReveal, MagneticButton } from './motion'
import Icon from './Icons'
import { CONTACT, SOCIALS } from '../content'

const waLink = `https://wa.me/${CONTACT.whatsapp}`

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-[4.5rem]">
      {/* Sfondo: solo bagliore + grana (niente watermark) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-6%] h-[70vh] w-[70vh] -translate-x-1/2 glow-radial" />
        <div className="grain-overlay absolute inset-0 opacity-[0.06]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="container-x">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="kicker justify-center"
          >
            Digital Marketing Studio · Terni
          </motion.span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <WordReveal text="Crescita digitale con **metodo**," delay={0.35} />
            <br />
            <WordReveal text="non con **tentativi**." delay={0.85} />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="mt-10 flex justify-center"
          >
            <MagneticButton
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-orange px-8 py-4 text-base font-bold text-ink-950 shadow-glow animate-pulse-glow"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Scrivici su WhatsApp
              <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </motion.div>

          {/* Social — nell'hero su mobile (su desktop stanno nella nav) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7 }}
            className="mt-9 flex flex-col items-center gap-4 md:hidden"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              Guarda i nostri risultati
            </span>
            <div className="flex items-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="social-pulse flex h-14 w-14 items-center justify-center rounded-full border border-orange/70 bg-orange/10 text-white transition-colors hover:bg-orange hover:text-ink-950"
                >
                  <Icon name={s.icon} className="h-6 w-6" />
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
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 md:flex"
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
