import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LEGAL } from '../content'
import { loadTrackers, TRACKING_IDS } from '../lib/tracking'

const CONSENT_KEY = 'dtech-cookie-consent'
const hasTrackers = Boolean(TRACKING_IDS.ga4 || TRACKING_IDS.metaPixel || TRACKING_IDS.clarity)

/*
 * Banner cookie con consenso preventivo (GDPR): i tracker (GA4, Meta Pixel,
 * Clarity) partono solo dopo "Accetta". Finché non è configurato nessun ID
 * in src/lib/tracking.js il banner resta nascosto — il sito è già pronto.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!hasTrackers) return
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === 'accepted') loadTrackers()
    else if (!consent) setVisible(true)
  }, [])

  const decide = (accepted) => {
    localStorage.setItem(CONSENT_KEY, accepted ? 'accepted' : 'rejected')
    setVisible(false)
    if (accepted) loadTrackers()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-xl rounded-2xl border border-white/10 bg-ink-900/95 p-5 shadow-2xl backdrop-blur-md sm:p-6"
          role="dialog"
          aria-label="Preferenze cookie"
        >
          <p className="text-sm leading-relaxed text-white/70">
            Usiamo cookie di terze parti (statistiche e marketing) per migliorare il sito. Puoi
            accettare o rifiutare: il sito funziona comunque.{' '}
            <a href={LEGAL.cookiePolicyUrl} className="text-orange hover:underline">
              Cookie Policy
            </a>
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => decide(true)}
              className="rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              Accetta
            </button>
            <button
              type="button"
              onClick={() => decide(false)}
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              Rifiuta
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
