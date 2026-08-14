import type { CSSProperties } from 'react'

export type ChamferCorner = 'tl' | 'tr' | 'br' | 'bl'

export function chamferClipPath(size: number | string, corners: ChamferCorner[] = ['tl', 'br']): string {
  const s = typeof size === 'number' ? `${size}px` : size
  const cut = (corner: ChamferCorner) => corners.includes(corner)

  const points: string[] = []

  points.push(cut('tl') ? `${s} 0` : '0 0')

  if (cut('tr')) {
    points.push(`calc(100% - ${s}) 0`, `100% ${s}`)
  } else {
    points.push('100% 0')
  }

  if (cut('br')) {
    points.push(`100% calc(100% - ${s})`, `calc(100% - ${s}) 100%`)
  } else {
    points.push('100% 100%')
  }

  if (cut('bl')) {
    points.push(`${s} 100%`, `0 calc(100% - ${s})`)
  } else {
    points.push('0 100%')
  }

  if (cut('tl')) {
    points.push(`0 ${s}`)
  }

  return `polygon(${points.join(', ')})`
}

export const CTA_CLIP_PATH = chamferClipPath(18)

/**
 * Aplica o clip-path só a partir do `lg:`. No mobile o elemento fica retangular
 * (sem chanfro) — usar style/className espalhados no elemento.
 */
export function responsiveClipPath(clipPath: string) {
  return {
    style: { '--clip': clipPath } as CSSProperties,
    className: 'lg:[clip-path:var(--clip)]',
  }
}
