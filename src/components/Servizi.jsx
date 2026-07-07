import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import SectionHeader from './SectionHeader'
import Icon from './Icons'
import iconStrategia from '../assets/services/strategia.png'
import iconBrand from '../assets/services/brand.png'
import iconPresenza from '../assets/services/presenza.png'

// 3 macro-investimenti (un ecosistema, non un listino). Ognuno raggruppa più
// servizi e si espande al click (accordion: uno aperto alla volta).
const INVESTMENTS = [
  {
    img: iconStrategia,
    title: 'Strategia & Crescita',
    desc: 'La direzione e il carburante per crescere in modo misurabile.',
    items: ['Digital Strategy', 'SEO', 'Advertising'],
    detail:
      'Partiamo dagli obiettivi, non dagli strumenti. Analizziamo mercato e posizionamento, poi attiviamo SEO e campagne advertising per portare richieste reali. Ogni euro investito è tracciato e ottimizzato.',
  },
  {
    img: iconBrand,
    title: 'Brand & Comunicazione',
    desc: 'Un’identità riconoscibile e contenuti che fermano lo scroll.',
    items: ['Content Creation', 'Social Media Management', 'Graphic Design & Brand Identity'],
    detail:
      'Costruiamo la tua identità visiva e la voce del brand, poi la alimentiamo con contenuti e gestione social costanti. Diventi riconoscibile, coerente e impossibile da ignorare.',
  },
  {
    img: iconPresenza,
    title: 'Presenza Digitale',
    desc: 'La casa digitale del tuo business, costruita per convertire.',
    items: ['Siti Web', 'Landing Page', 'Soluzioni Digitali', 'Consulenza Strategica'],
    detail:
      'Progettiamo siti e landing page veloci e orientati alla conversione, con soluzioni digitali su misura e la consulenza per far lavorare tutto insieme verso un unico obiettivo: la crescita.',
  },
]

export default function Servizi() {
  const [open, setOpen] = useState(null)

  return (
    <section id="servizi" className="relative py-14 md:py-18">
      <div className="container-x">
        <SectionHeader
          kicker="Cosa facciamo"
          title={
            <>
              <WordReveal text="Smettila di chiamarli “Servizi”." />
              <br />
              <WordReveal text="Chiamali **Investimenti**." delay={0.2} />
            </>
          }
        />

        <div className="mx-auto mt-10 grid max-w-5xl items-start gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {INVESTMENTS.map((inv, i) => {
            const isOpen = open === i
            const featured = i === 0
            return (
              <Reveal key={inv.title} delay={i * 0.1} y={28}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex h-full w-full flex-col rounded-[1.5rem] border p-6 text-left transition-all duration-300 md:p-7 ${
                    isOpen
                      ? 'border-orange/50 bg-white/[0.06]'
                      : featured
                        ? 'border-orange/20 bg-white/[0.045] hover:-translate-y-1 hover:border-orange/40 hover:shadow-2xl'
                        : 'border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl'
                  }`}
                >
                  {/* Icona custom arancione (mask su sfondo trasparente), dentro la card, titolo affianco */}
                  <div className="mb-6 flex items-center gap-4">
                    <span
                      aria-hidden
                      className="h-16 w-16 shrink-0 bg-orange"
                      style={{
                        WebkitMaskImage: `url(${inv.img})`,
                        maskImage: `url(${inv.img})`,
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                      }}
                    />
                    <h3 className="font-display text-xl font-bold leading-tight text-white">{inv.title}</h3>
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-white/55">{inv.desc}</p>

                  <ul className="mt-6 space-y-3">
                    {inv.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-[0.95rem] font-medium text-white/85">
                        <Icon name="check" className="h-4 w-4 shrink-0 text-orange" />
                        {it}
                      </li>
                    ))}
                  </ul>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-5 border-t border-white/10 pt-5 text-[0.95rem] leading-relaxed text-white/60">
                          {inv.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-orange">
                    {isOpen ? 'Chiudi' : 'Esplora'}
                    <Icon
                      name="chevron"
                      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
