import { useEffect, useState } from 'react'
import { animate, useMotionValue, useMotionTemplate, motion } from 'framer-motion'
import Logo from './Logo'

/*
 * Intro / preloader on-brand: appare il logo D-Tech, la "camera" entra
 * nell'occhio del logo e la pupilla si apre (iris reveal via CSS mask) svelando
 * il sito. Solo transform + mask → fluido su desktop e mobile. Rispetta
 * prefers-reduced-motion (salta) ed è saltabile con click/tap.
 */
export default function Intro() {
  const [done, setDone] = useState(false)

  const opacity = useMotionValue(0)
  const scale = useMotionValue(0.82)
  const blur = useMotionValue(10)
  const radius = useMotionValue(0)

  const logoFilter = useMotionTemplate`blur(${blur}px)`
  const maskImage = useMotionTemplate`radial-gradient(circle at 50% 44%, transparent ${radius}px, #000 ${radius}px)`

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true)
      return
    }

    document.body.style.overflow = 'hidden'
    const far = Math.hypot(window.innerWidth, window.innerHeight) * 1.1
    const T = 2.55

    // Una sola timeline per ogni motion value: logo entra → respiro → zoom
    // nell'occhio; la pupilla (radius) si apre alla fine svelando il sito.
    const anims = [
      animate(scale, [0.82, 1, 0.92, 1, 9], {
        duration: T,
        times: [0, 0.275, 0.39, 0.49, 1],
        ease: [[0.22, 1, 0.36, 1], 'easeInOut', 'easeInOut', [0.7, 0, 0.84, 0]],
      }),
      animate(opacity, [0, 1, 1, 0], { duration: T, times: [0, 0.275, 0.5, 1], ease: 'easeInOut' }),
      animate(blur, [10, 0, 0], { duration: T, times: [0, 0.275, 1] }),
      animate(radius, far, { duration: 1, delay: 1.55, ease: [0.65, 0, 0.35, 1] }),
    ]

    const timer = setTimeout(() => {
      document.body.style.overflow = ''
      setDone(true)
    }, T * 1000 + 120)

    return () => {
      clearTimeout(timer)
      anims.forEach((a) => a.stop && a.stop())
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const skip = () => {
    document.body.style.overflow = ''
    setDone(true)
  }

  if (done) return null

  return (
    <motion.div
      onClick={skip}
      className="fixed inset-0 z-[200] flex cursor-pointer items-center justify-center bg-ink-950"
      style={{ WebkitMaskImage: maskImage, maskImage }}
    >
      {/* bagliore arancione dietro il logo */}
      <div className="pointer-events-none absolute h-[45vmin] w-[45vmin] rounded-full bg-orange/25 blur-[90px]" />

      <motion.div
        style={{ opacity, scale, filter: logoFilter, transformOrigin: '46% 33%' }}
        className="will-change-transform"
      >
        <Logo variant="mark" className="h-36 w-auto text-white sm:h-44 md:h-56" />
      </motion.div>

      <span className="pointer-events-none absolute bottom-8 text-xs font-medium uppercase tracking-[0.3em] text-white/30">
        clicca per saltare
      </span>
    </motion.div>
  )
}
