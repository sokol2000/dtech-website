import Logo from './Logo'
import { LEGAL } from '../content'

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
          <div className="md:col-span-7">
            <Logo variant="full" className="h-24 w-auto text-white" />
            <p className="mt-6 max-w-sm text-white/50">
              Pensiamo in grande, per offrire grandi soluzioni.
            </p>
          </div>

          {/* Dati societari */}
          <div className="md:col-span-5">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
              Dati societari
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed text-white/50">
              <li>{LEGAL.ragioneSociale}</li>
              <li>Sede legale: {LEGAL.sedeLegale}</li>
              <li>C.F. e P.IVA: {LEGAL.cfPiva}</li>
              <li>REA: {LEGAL.rea}</li>
              <li>Capitale sociale: {LEGAL.capitaleSociale}</li>
              <li>Codice SDI: {LEGAL.sdi}</li>
              <li>
                PEC:{' '}
                <a href={`mailto:${LEGAL.pec}`} className="transition-colors hover:text-orange">
                  {LEGAL.pec}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <span>© 2026 {LEGAL.ragioneSociale} · Tutti i diritti riservati.</span>
          <span className="flex items-center gap-5">
            <a href={LEGAL.privacyPolicyUrl} className="transition-colors hover:text-orange">
              Privacy Policy
            </a>
            <a href={LEGAL.cookiePolicyUrl} className="transition-colors hover:text-orange">
              Cookie Policy
            </a>
          </span>
          <span>
            Sito realizzato da{' '}
            <span className="font-semibold text-white/60">Sokol Kolgjini</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
