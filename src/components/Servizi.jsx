import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import SectionHeader from './SectionHeader'
import Icon from './Icons'

// 3 macro-investimenti (un ecosistema, non un listino). Ognuno raggruppa più
// servizi e si espande al click (accordion: uno aperto alla volta).
const INVESTMENTS = [
  {
    icon: 'strategy',
    title: 'Strategia & Crescita',
    desc: 'La direzione e il carburante per crescere in modo misurabile.',
    items: ['Digital Strategy', 'SEO', 'Advertising'],
    detail:
      'Partiamo dagli obiettivi, non dagli strumenti. Analizziamo mercato e posizionamento, poi attiviamo SEO e campagne advertising per portare richieste reali. Ogni euro investito è tracciato e ottimizzato.',
  },
  {
    icon: 'brand',
    title: 'Brand & Comunicazione',
    desc: 'Un’identità riconoscibile e contenuti che fermano lo scroll.',
    items: ['Content Creation', 'Social Media Management', 'Graphic Design & Brand Identity'],
    detail:
      'Costruiamo la tua identità visiva e la voce del brand, poi la alimentiamo con contenuti e gestione social costanti. Diventi riconoscibile, coerente e impossibile da ignorare.',
  },
  {
    icon: 'web',
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
    <section id="servizi" className="relative py-16 md:py-24">
      <div className="container-x">
        <SectionHeader
          kicker="Cosa facciamo"
          title={<WordReveal text="Investimenti" />}
          sub="Un ecosistema progettato con un solo scopo: eliminare gli sprechi e massimizzare la crescita."
        />

        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {INVESTMENTS.map((inv, i) => {
            const isOpen = open === i
            return (
              <Reveal key={inv.title} delay={i * 0.1} y={28}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex h-full w-full flex-col rounded-2xl border p-7 text-left transition-all duration-300 ${
                    isOpen
                      ? 'border-orange/50 bg-white/[0.05]'
                      : 'border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl'
                  }`}
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/10 text-orange">
                    <Icon name={inv.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{inv.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{inv.desc}</p>

                  <ul className="mt-6 space-y-2.5">
                    {inv.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-sm font-medium text-white/80">
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
                        <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/60">
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
