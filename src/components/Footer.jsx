import Logo from './Logo'
import { CONTACT, LEGAL } from '../content'

/*
 * Footer con le informazioni obbligatorie per legge (art. 2250 c.c.,
 * L. 2/2009 per la PEC, DPR 633/72 per la P.IVA) + link Privacy/Cookie
 * Policy, necessari con Google Analytics attivo sul dominio del cliente.
 */
export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Logo variant="full" className="h-24 w-auto text-white" />
            <p className="mt-6 max-w-sm text-white/50">
              Crescita digitale con metodo, non con tentativi. Agenzia di Digital Marketing a
              Terni.
            </p>
          </div>

          {/* Contatti */}
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
              <li>
                PEC: <span className="text-white/50">{LEGAL.pec}</span>
              </li>
            </ul>
          </div>

          {/* Dati societari */}
          <div className="md:col-span-4">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
              Dati societari
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed text-white/50">
              <li>{LEGAL.ragioneSociale}</li>
              <li>Sede legale: {LEGAL.sedeLegale}</li>
              <li>P.IVA: {LEGAL.piva}</li>
              <li>C.F.: {LEGAL.codiceFiscale}</li>
              <li>REA: {LEGAL.rea}</li>
              <li>Capitale sociale: {LEGAL.capitaleSociale}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <span>
            © 2026 {LEGAL.ragioneSociale} · P.IVA {LEGAL.piva}. Tutti i diritti riservati.
          </span>
          <span className="flex items-center gap-5">
            <a href={LEGAL.privacyPolicyUrl} className="transition-colors hover:text-orange">
              Privacy Policy
            </a>
            <a href={LEGAL.cookiePolicyUrl} className="transition-colors hover:text-orange">
              Cookie Policy
            </a>
          </span>
          <span>Fatto da Sokol Kolgjini</span>
        </div>
      </div>
    </footer>
  )
}
