import { Reveal, WordReveal } from './motion'
import SectionHeader from './SectionHeader'

// Mini-manifesto: cosa CREDIAMO (non cosa facciamo). Prepara Servizi + Metodo.
const BELIEFS = [
  {
    n: '01',
    body: (
      <>
        La crescita non è fortuna.
        <br />È un <span className="text-orange">sistema che si ripete</span>.
      </>
    ),
  },
  {
    n: '02',
    body: (
      <>
        I <span className="text-orange">like</span> non pagano gli stipendi.
        <br />I <span className="text-orange">risultati</span> sì.
      </>
    ),
  },
  {
    n: '03',
    body: (
      <>
        Il tuo business non è un esperimento.
        <br />Merita un <span className="text-orange">metodo</span>.
      </>
    ),
  },
]

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="relative py-12 md:py-14">
      <div className="container-x">
        <SectionHeader
          kicker="Chi siamo"
          title={<WordReveal text="Due fratelli. Un metodo. **La** **tua** **crescita**." />}
          sub={
            <>
              Dario &amp; Diego Testarella · <span className="text-white/80">D-Tech, Terni</span>
            </>
          }
        />

        {/* Storia centrata, asciutta */}
        <div className="mx-auto mt-5 max-w-2xl space-y-3 text-center md:mt-6">
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Tutto è nato da una cosa che ci faceva <span className="text-white">rabbia</span>: vedere
              aziende vere della nostra città sparire online, mentre chi urlava più forte, spesso con meno
              valore, si prendeva tutto.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Non venivamo dal marketing, ma dalla <span className="text-white">testardaggine</span>:
              studiare, sbagliare, rifare. Un pezzo meglio ogni giorno, finché è diventato un{' '}
              <span className="text-orange">metodo</span>.
            </p>
          </Reveal>
        </div>

        {/* Manifesto: cosa crediamo — 3 card */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3 md:mt-10">
          {BELIEFS.map((b, i) => (
            <Reveal key={b.n} delay={0.2 + i * 0.08}>
              <div
                className={`flex h-full flex-col items-center gap-4 rounded-2xl border p-6 text-center ${
                  i === 1 ? 'border-orange/25 bg-white/[0.055]' : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-orange ${
                    i === 1 ? 'bg-orange/25' : 'bg-orange/15'
                  }`}
                >
                  {b.n}
                </span>
                <p className="text-base font-semibold leading-relaxed text-white/90">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
