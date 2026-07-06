import { motion } from 'framer-motion'
import { WordReveal, MagneticButton } from './motion'
import Logo from './Logo'
import Icon from './Icons'
import { CONTACT } from '../content'

const waLink = `https://wa.me/${CONTACT.whatsapp}`

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-[4.5rem]">
      {/* Sfondo: bagliore + grana + logo gigante sfocato */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[70vh] w-[70vh] -translate-x-1/2 glow-radial" />
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="absolute right-[-6%] top-1/2 -translate-y-1/2"
        >
          <Logo variant="mark" className="h-[80vh] w-auto text-white" />
        </motion.div>
        <div className="grain-overlay absolute inset-0 opacity-[0.06]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="container-x">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="kicker"
          >
            Digital Marketing Studio · Terni
          </motion.span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <WordReveal text="Crescita digitale con **metodo**," delay={0.35} />
            <br />
            <WordReveal text="non con **tentativi**." delay={0.85} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Strategia, branding, contenuti, siti web e advertising dentro un
            percorso pensato per <span className="text-white">risultati misurabili</span>. Non siamo
            artisti: abbiamo un metodo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#contatti"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-7 py-4 text-base font-bold text-ink-950 shadow-glow animate-pulse-glow"
            >
              Parliamo del progetto
              <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              strength={0.25}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-white/40"
            >
              <Icon name="whatsapp" className="h-5 w-5 text-orange" />
              Scrivici su WhatsApp
            </MagneticButton>
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
