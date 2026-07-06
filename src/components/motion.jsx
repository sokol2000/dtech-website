import { useRef } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useScroll,
} from 'framer-motion'
import { useEffect } from 'react'

/* ------------------------------------------------------------------ *
 * Reveal — un blocco che "arriva" allo scroll (fade + slide + scale)  *
 * ------------------------------------------------------------------ */
export function Reveal({ children, delay = 0, y = 40, className = '', once = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ *
 * WordReveal — headline che si compone parola per parola (come i      *
 * sottotitoli del video showreel). Le parole tra ** ** vanno arancio. *
 * ------------------------------------------------------------------ */
export function WordReveal({ text, className = '', highlightClass = 'text-gradient-orange', delay = 0, stagger = 0.08 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const words = text.split(' ')
  return (
    <span ref={ref} className={className} style={{ display: 'inline' }}>
      {words.map((word, i) => {
        // una parola è evidenziata se contiene i marcatori **; la punteggiatura
        // attaccata (es. "**metodo**," o "**tentativi**.") resta gestita.
        const isHi = word.includes('**')
        const clean = word.replace(/\*\*/g, '')
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'top',
              // spazio extra sotto per non tagliare i discendenti (g, p, y, j)
              paddingBottom: '0.15em',
              marginBottom: '-0.15em',
            }}
          >
            <motion.span
              style={{ display: 'inline-block', willChange: 'transform' }}
              initial={{ y: '125%', opacity: 0 }}
              animate={inView ? { y: '0%', opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
              className={isHi ? highlightClass : undefined}
            >
              {clean}
            </motion.span>
            {i < words.length - 1 && ' '}
          </span>
        )
      })}
    </span>
  )
}

/* ------------------------------------------------------------------ *
 * Counter — numero che scatta salendo quando entra in vista            *
 * ------------------------------------------------------------------ */
export function Counter({ to, duration = 2, suffix = '', prefix = '', className = '', format = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => {
    const n = Math.round(v)
    return (prefix + (format ? n.toLocaleString('it-IT') : n) + suffix)
  })
  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] })
      return controls.stop
    }
  }, [inView, to, duration, count])
  return <motion.span ref={ref} className={className}>{rounded}</motion.span>
}

/* ------------------------------------------------------------------ *
 * MagneticButton — il bottone segue leggermente il cursore            *
 * ------------------------------------------------------------------ */
export function MagneticButton({ children, className = '', as = 'a', strength = 0.35, ...props }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * strength)
    y.set(relY * strength)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Comp = motion[as] || motion.a
  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  )
}

/* ------------------------------------------------------------------ *
 * Parallax — sposta il figlio in base allo scroll                     *
 * ------------------------------------------------------------------ */
export function Parallax({ children, amount = 60, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount])
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
