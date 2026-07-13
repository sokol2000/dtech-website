/*
 * Caricamento degli strumenti di tracciamento — SOLO dopo il consenso cookie
 * (obbligo Garante Privacy / GDPR: nessun tracker prima dell'ok dell'utente).
 *
 * Quando il sito va sul dominio del cliente, inserire qui i tre ID:
 * gli script partono da soli al primo consenso (o a consenso già dato).
 */
export const TRACKING_IDS = {
  ga4: '', // serve: ID GA4, es. 'G-XXXXXXXXXX'
  metaPixel: '', // serve: ID Meta Pixel, es. '1234567890'
  clarity: '', // serve: ID Microsoft Clarity, es. 'abcdefghij'
}

let loaded = false

export function loadTrackers() {
  if (loaded) return
  loaded = true

  // Google Analytics 4
  if (TRACKING_IDS.ga4) {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_IDS.ga4}`
    document.head.appendChild(s)
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', TRACKING_IDS.ga4, { anonymize_ip: true })
  }

  // Meta Pixel
  if (TRACKING_IDS.metaPixel) {
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    /* eslint-enable */
    window.fbq('init', TRACKING_IDS.metaPixel)
    window.fbq('track', 'PageView')
  }

  // Microsoft Clarity
  if (TRACKING_IDS.clarity) {
    /* eslint-disable */
    ;(function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          ;(c[a].q = c[a].q || []).push(arguments)
        }
      t = l.createElement(r)
      t.async = 1
      t.src = 'https://www.clarity.ms/tag/' + i
      y = l.getElementsByTagName(r)[0]
      y.parentNode.insertBefore(t, y)
    })(window, document, 'clarity', 'script', TRACKING_IDS.clarity)
    /* eslint-enable */
  }
}
