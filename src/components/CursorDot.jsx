import { useEffect, useRef, useState } from 'react'

/*
 * Cursore custom fluido: un punto arancione che insegue il mouse con
 * interpolazione (lerp) dentro un loop requestAnimationFrame. NON usa stato
 * React durante il movimento (nessun re-render), quindi il movimento è liscio.
 * L'hover su elementi interattivi viene gestito con una classe CSS, non con setState.
 * Attivo solo su dispositivi con puntatore fine (no touch).
 */
export default function CursorDot() {
  const [enabled, setEnabled] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const root = rootRef.current
    if (!root) return

    document.documentElement.classList.add('cursor-none')

    // posizione target (mouse) e posizione corrente (interpolata)
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let cx = mx
    let cy = my
    let raf = 0
    let visible = false

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (!visible) {
        visible = true
        root.style.opacity = '1'
      }
    }
    const onOver = (e) => {
      const hit = e.target.closest && e.target.closest('a, button, input, textarea, select, label, [data-cursor]')
      root.classList.toggle('is-hover', !!hit)
    }
    const onLeave = () => {
      visible = false
      root.style.opacity = '0'
    }
    const onDown = () => root.classList.add('is-down')
    const onUp = () => root.classList.remove('is-down')

    const loop = () => {
      // lerp: più alto = più reattivo, più basso = più "morbido"
      cx += (mx - cx) * 0.2
      cy += (my - cy) * 0.2
      root.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mousedown', onDown, { passive: true })
    window.addEventListener('mouseup', onUp, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.documentElement.classList.remove('cursor-none')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div ref={rootRef} aria-hidden className="cursor-root" style={{ opacity: 0 }}>
      <div className="cursor-inner" />
    </div>
  )
}
