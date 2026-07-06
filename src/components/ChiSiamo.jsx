import { Reveal, WordReveal } from './motion'

const POINTS = [
  'Non siamo la solita web agency. Per fortuna.',
  'Supportiamo imprese e professionisti in un percorso di crescita strutturato.',
  'Non siamo artisti, ma abbiamo un metodo.',
]

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="relative py-28 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="kicker">
              <span className="h-px w-8 bg-orange" />
              Chi siamo
            </span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
            <WordReveal text="Siamo qui per fare la **differenza**." />
          </h2>
        </div>

        <div className="flex flex-col justify-center gap-8 lg:col-span-6">
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-white/70">
              <span className="text-white">D-Tech</span> è un’agenzia di Digital Marketing con un
              metodo esclusivo: uniamo strategia, branding e sviluppo in un unico sistema pensato
              per far crescere il tuo business, passo dopo passo.
            </p>
          </Reveal>
          <div className="flex flex-col gap-4">
            {POINTS.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.1}>
                <div className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange shadow-glow" />
                  <span className="text-lg font-medium text-white/85">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
