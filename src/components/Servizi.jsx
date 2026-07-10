import { Reveal, WordReveal } from './motion'
import SectionHeader from './SectionHeader'
import Icon from './Icons'
import { SERVICE_GROUPS } from '../content'
import iconStrategia from '../assets/services/strategia.png'
import iconCreativity from '../assets/services/creativity.png'
import iconCommunication from '../assets/services/communication.png'
import iconSocial from '../assets/services/social-media.png'
import iconAds from '../assets/services/ads.png'
import iconWeb from '../assets/services/web.png'

// mappa slug → asset (le icone sono maschere: il colore arancione arriva dal CSS)
const ICONS = {
  strategia: iconStrategia,
  creativity: iconCreativity,
  communication: iconCommunication,
  'social-media': iconSocial,
  ads: iconAds,
  web: iconWeb,
}

export default function Servizi() {
  return (
    <section id="servizi" className="relative py-12 md:py-14">
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

        <div className="mx-auto mt-10 grid max-w-6xl items-stretch gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08} y={28} className="h-full">
              <article className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:bg-white/[0.05] hover:shadow-2xl md:p-7">
                {/* Icona (mask arancione) + titolo */}
                <div className="mb-5 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="h-12 w-12 shrink-0 bg-orange"
                    style={{
                      WebkitMaskImage: `url(${ICONS[g.icon]})`,
                      maskImage: `url(${ICONS[g.icon]})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                  />
                  <h3 className="font-display text-xl font-bold leading-tight text-white">
                    {g.title}
                  </h3>
                </div>

                {/* Servizi: nome — descrizione */}
                <ul className="mb-5 space-y-3.5">
                  {g.items.map((it) => (
                    <li key={it.name} className="flex items-start gap-3">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-orange" />
                      <p className="text-[0.95rem] leading-snug">
                        <span className="block font-semibold text-white/90">{it.name}</span>
                        <span className="mt-0.5 block text-white/50">{it.desc}</span>
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Citazione di chiusura */}
                <p className="mt-auto border-t border-white/10 pt-4 font-serif text-[1.25rem] font-semibold italic leading-snug text-white">
                  <span className="mr-1 not-italic text-orange">“</span>
                  {g.quote}
                  <span className="ml-1 not-italic text-orange">”</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
