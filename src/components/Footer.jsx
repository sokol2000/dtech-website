import Logo from './Logo'
import Icon from './Icons'
import { NAV_LINKS, CONTACT, SOCIALS } from '../content'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="full" className="h-20 w-auto text-white" />
            <p className="mt-6 max-w-sm text-white/50">
              Crescita digitale con metodo, non con tentativi. Agenzia di Digital Marketing a Terni.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-orange hover:bg-orange hover:text-ink-950"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
              Naviga
            </div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 transition-colors hover:text-orange">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
              Contatti
            </div>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-orange">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:+${CONTACT.phoneRaw}`} className="transition-colors hover:text-orange">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>{CONTACT.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <span>© 2026 {CONTACT.company}. Tutti i diritti riservati.</span>
          <span>
            Made with <span className="text-orange">method</span> · Terni
          </span>
        </div>
      </div>
    </footer>
  )
}
