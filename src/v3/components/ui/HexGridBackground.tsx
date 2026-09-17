import { useEffect, useRef, useState } from 'react'
import { HexPattern } from '@/v3/components/ui/HexPattern'

interface HexGridBackgroundProps {
  corner: 'bottom-right' | 'top-left' | 'bottom-left'
}

const CORNER_STYLES = {
  'bottom-right': {
    position: 'right-0 bottom-0',
    preserveAspectRatio: 'xMaxYMax meet',
  },
  'top-left': {
    position: 'top-0 left-0',
    preserveAspectRatio: 'xMinYMin meet',
  },
  'bottom-left': {
    position: 'bottom-0 left-0',
    preserveAspectRatio: 'xMinYMax meet',
  },
} as const

export function HexGridBackground({ corner }: HexGridBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [glow, setGlow] = useState({ x: 50, y: 50 })
  const { position, preserveAspectRatio } = CORNER_STYLES[corner]

  useEffect(() => {
    function handleMouseMove(event: PointerEvent) {
      const bounds = containerRef.current?.getBoundingClientRect()
      if (!bounds) return
      setGlow({
        x: ((event.clientX - bounds.left) / bounds.width) * 100,
        y: ((event.clientY - bounds.top) / bounds.height) * 100,
      })
    }

    window.addEventListener('pointermove', handleMouseMove)
    return () => window.removeEventListener('pointermove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute h-auto w-[720px] max-w-[90%] ${position}`}
    >
      <HexPattern preserveAspectRatio={preserveAspectRatio} className="h-auto w-full text-background-section" />
      <HexPattern
        preserveAspectRatio={preserveAspectRatio}
        className="absolute inset-0 h-auto w-full text-accent"
        style={{
          WebkitMaskImage: `radial-gradient(circle 160px at ${glow.x}% ${glow.y}%, black, transparent 70%)`,
          maskImage: `radial-gradient(circle 160px at ${glow.x}% ${glow.y}%, black, transparent 70%)`,
        }}
      />
    </div>
  )
}
