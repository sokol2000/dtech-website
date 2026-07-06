import { Reveal } from './motion'

/*
 * Header di sezione STANDARD (usato in tutte le sezioni per coerenza, stile Apple):
 * kicker centrato + titolo centrato + sottotitolo opzionale.
 * `title` accetta JSX (es. <WordReveal .../>). Niente trattini, tutto centrato.
 */
export default function SectionHeader({ kicker, title, sub, className = '' }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <Reveal>
        <span className="kicker justify-center">{kicker}</span>
      </Reveal>
      <h2 className="mt-4 font-display text-[1.9rem] font-extrabold leading-[1.05] tracking-tight sm:text-[2.5rem]">
        {title}
      </h2>
      {sub && (
        <Reveal delay={0.12}>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/55">{sub}</p>
        </Reveal>
      )}
    </div>
  )
}
