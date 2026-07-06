import { useEffect, useState } from 'react'

/*
 * PROVA (opzione 1): annotazione "a gesso" attorno alle icone social in alto a
 * destra — cerchio disegnato a mano + scritta manoscritta. Compare sulla hero e
 * svanisce dolcemente allo scroll. Solo desktop (i social nella nav sono md+).
 */
export default function ChalkAnnotation() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const onScroll = () => setOpacity(Math.max(0, 1 - window.scrollY / 160))
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none fixed right-0 top-0 z-[55] hidden transition-opacity duration-200 md:block"
    >
      <svg width="300" height="190" viewBox="0 0 300 190" fill="none">
        {/* cerchio a gesso attorno alle icone (centro pill ~184,45) */}
        <path
          d="M 114 48 C 112 20 150 8 186 9 C 234 10 256 26 253 49 C 250 74 214 83 181 82 C 140 81 114 66 118 42 C 121 27 149 17 184 16"
          stroke="#ffffff"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        {/* freccia dalla scritta verso il cerchio */}
        <path
          d="M 142 120 C 160 106 168 98 176 88"
          stroke="#ffffff"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M 176 88 L 164 92 M 176 88 L 173 101"
          stroke="#ffffff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        {/* scritta a mano */}
        <text x="18" y="140" fontFamily="Caveat, cursive" fontWeight="700" fontSize="33" fill="#ffffff">
          il nostro lavoro
        </text>
        <text x="18" y="172" fontFamily="Caveat, cursive" fontWeight="700" fontSize="33" fill="#ffffff">
          parla ogni <tspan fill="#ff5100">giorno</tspan>
        </text>
      </svg>
    </div>
  )
}
