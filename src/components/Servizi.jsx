import { motion } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import SectionHeader from './SectionHeader'
import Icon from './Icons'

// 8 servizi → 3 pilastri (un sistema, non un listino). Ogni pilastro ha una
// promessa e i servizi specifici come tag.
const PILLARS = [
  {
    icon: 'strategy',
    name: 'Strategia',
    benefit: 'Prima la direzione: decidiamo dove andare, non solo come.',
    items: ['Consulenza strategica', 'Digital strategy', 'Posizionamento'],
  },
  {
    icon: 'content',
    name: 'Brand & Contenuti',
    benefit: 'Ti rendiamo riconoscibile e impossibile da ignorare.',
    items: ['Visual brand & grafica', 'Content creation', 'Social media'],
  },
  {
    icon: 'ads',
    name: 'Acquisizione',
    benefit: 'Trasformiamo l’attenzione in clienti reali.',
    items: ['Siti web & landing', 'Advertising', 'SEO'],
  },
]

export default function Servizi() {
  return (
    <section id="servizi" className="relative py-12 md:py-14">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[50vh] w-[50vh] glow-radial opacity-40" />
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

        <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:mt-10 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} y={28}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card group flex h-full flex-col items-center p-7 text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-ink-950 group-hover:shadow-glow">
                  <Icon name={p.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.benefit}</p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {p.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
