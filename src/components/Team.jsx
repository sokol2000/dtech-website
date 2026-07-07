import { motion } from 'framer-motion'
import { Reveal, WordReveal } from './motion'
import Icon from './Icons'
import { TEAM } from '../content'

/*
 * Composizione editoriale, non una griglia da organigramma:
 * i due founder aprono la sezione (ritratti ~25% più grandi + badge),
 * i quattro membri seguono su una riga di card identiche.
 * Stessa identica interazione hover per tutti — solo la gerarchia li distingue.
 */
function TeamCard({ m, big = false, delay = 0 }) {
  return (
    <Reveal delay={delay} y={28}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-ink-700 to-ink-900 transition-[box-shadow,border-color] duration-300 hover:border-white/20 hover:shadow-2xl"
      >
        {/* Ritratto */}
        <img
          src={m.photo}
          alt={m.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-2 group-hover:scale-[1.04]"
        />
        {/* Sfumatura per leggibilità del testo */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />

        {/* Badge Founder — distinzione sobria */}
        {m.founder && (
          <span className="absolute left-3 top-3 rounded-full border border-orange/40 bg-ink-950/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-orange backdrop-blur-sm">
            Founder
          </span>
        )}

        {/* LinkedIn — appare in hover */}
        <a
          href={m.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`LinkedIn di ${m.name}`}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink-950/70 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-orange hover:text-ink-950 group-hover:opacity-100"
        >
          <Icon name="linkedin" className="h-4 w-4" />
        </a>

        {/* Testo */}
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <h3
            className={`font-display font-bold leading-tight text-white ${
              big ? 'text-xl md:text-2xl' : 'text-lg'
            }`}
          >
            {m.name}
          </h3>
          <p className="text-sm font-medium text-orange/90">{m.role}</p>
          {/* Bio — si rivela in hover */}
          <p className="mt-1 max-h-0 overflow-hidden text-sm leading-relaxed text-white/60 opacity-0 transition-all duration-300 ease-out group-hover:mt-2 group-hover:max-h-20 group-hover:opacity-100">
            {m.bio}
          </p>
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
            <span className="kicker justify-center">Team management</span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <WordReveal text="La X-Force… cioè, il **Team**." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Un gruppo di giovani altamente qualificati. Non giudicateci dalle foto: siamo più
              belli dal vivo.
            </p>
          </Reveal>
        </div>

        {/* Riga 1 — Founders (ritratti ~25% più grandi degli altri) */}
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-5 sm:max-w-[34rem] sm:grid-cols-2 sm:gap-6 md:mt-14">
          {founders.map((m, i) => (
            <TeamCard key={m.photo} m={m} big delay={i * 0.1} />
          ))}
        </div>

        {/* Riga 2 — Team (card identiche, sempre più piccole dei founder) */}
        <div className="mx-auto mt-4 grid max-w-md grid-cols-2 gap-4 sm:mt-6 sm:gap-5 lg:max-w-4xl lg:grid-cols-4">
          {members.map((m, i) => (
            <TeamCard key={m.photo} m={m} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
