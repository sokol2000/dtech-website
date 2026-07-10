import { motion } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import { TEAM } from '../content'

/*
 * Sezione Team — corporate, minimale, premium (riferimenti: Stripe, Linear, Vercel).
 * Card uniformi #1d1d1d con ritratti B/N. Dario non compare in foto: al suo posto
 * una composizione astratta (connessioni + monogramma) → card "executive".
 */

// Composizione astratta per Dario: rete di connessioni + monogramma "D".
function ExecutiveVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* bagliore + griglia di punti sottile */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 40%, rgba(255,81,0,0.14), transparent 62%)' }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '15px 15px',
        }}
      />
      {/* monogramma D sfumato */}
      <span className="pointer-events-none absolute select-none font-display text-[9rem] font-black leading-none text-white/[0.045] md:text-[11rem]">
        D
      </span>
      {/* rete di connessioni (business / strategy) */}
      <svg
        viewBox="0 0 100 100"
        className="relative h-1/2 w-1/2 overflow-visible transition-transform duration-700 ease-out group-hover:scale-105"
        fill="none"
      >
        <g stroke="rgba(255,255,255,0.22)" strokeWidth="0.8">
          <line x1="16" y1="72" x2="40" y2="52" />
          <line x1="40" y1="52" x2="70" y2="62" />
          <line x1="70" y1="62" x2="88" y2="28" />
          <line x1="40" y1="52" x2="32" y2="30" />
          <line x1="32" y1="30" x2="56" y2="20" />
          <line x1="56" y1="20" x2="88" y2="28" />
          <line x1="40" y1="52" x2="56" y2="20" />
        </g>
        <g fill="rgba(255,255,255,0.55)">
          <circle cx="16" cy="72" r="2.4" />
          <circle cx="40" cy="52" r="2.8" />
          <circle cx="70" cy="62" r="2.4" />
          <circle cx="32" cy="30" r="2.4" />
          <circle cx="56" cy="20" r="2.4" />
        </g>
        {/* nodo "risultato" arancione */}
        <circle cx="88" cy="28" r="4.4" fill="#ff5100" />
        <circle cx="88" cy="28" r="8" fill="#ff5100" opacity="0.18" />
      </svg>
    </div>
  )
}

function TeamCard({ m, big = false, delay = 0 }) {
  return (
    <Reveal delay={delay} y={28} className="h-full">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1d1d1d] transition-[border-color,box-shadow] duration-300 hover:border-orange/40 hover:shadow-2xl"
      >
        {/* Parte visiva */}
        <div className="relative aspect-[4/5] overflow-hidden">
          {m.photo ? (
            <img
              src={m.photo}
              alt={m.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top grayscale transition duration-500 ease-out will-change-transform group-hover:scale-[1.03] group-hover:brightness-110"
            />
          ) : (
            <ExecutiveVisual />
          )}
        </div>

        {/* Testo */}
        <div className="flex flex-1 flex-col px-4 py-4 text-center md:px-5 md:py-5">
          <h3 className={`font-display font-bold leading-tight text-white ${big ? 'text-xl md:text-2xl' : 'text-lg'}`}>
            {m.name}
          </h3>
          <p className="mt-1.5 text-sm font-semibold leading-snug text-orange">{m.role}</p>
          {m.subrole && (
            <p className="mt-0.5 text-sm font-medium leading-snug text-white/75">{m.subrole}</p>
          )}
          <p className="mt-2.5 text-sm leading-relaxed text-white/50">{m.desc}</p>
        </div>
      </motion.div>
    </Reveal>
  )
}

export default function Team() {
  const founders = TEAM.filter((m) => m.founder)
  const members = TEAM.filter((m) => !m.founder)

  return (
    <section id="team" className="relative py-12 md:py-14">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="kicker justify-center">Il nostro team</span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <WordReveal text="Persone. Competenze. **Risultati.**" />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Specialisti coordinati come un’unica squadra: a ogni progetto le competenze giuste,
              dalla strategia ai risultati.
            </p>
          </Reveal>
        </div>

        {/* Riga 1 — Founders */}
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-5 sm:max-w-[30rem] sm:grid-cols-2 sm:gap-5 md:mt-14">
          {founders.map((m, i) => (
            <TeamCard key={m.name} m={m} big delay={i * 0.1} />
          ))}
        </div>

        {/* Riga 2 — Team */}
        <div className="mx-auto mt-4 grid max-w-sm grid-cols-1 gap-5 sm:mt-6 sm:max-w-md sm:grid-cols-2 sm:gap-5 lg:max-w-4xl lg:grid-cols-4">
          {members.map((m, i) => (
            <TeamCard key={m.name} m={m} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
