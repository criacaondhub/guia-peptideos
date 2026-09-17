import { HexPattern } from '@/v2/components/ui/HexPattern'
import { chamferClipPath, responsiveClipPath } from '@/lib/clip-path'
import { asset, cn } from '@/lib/utils'

const imageClip = responsiveClipPath(chamferClipPath(24))

interface DeliverableRowProps {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  reversed?: boolean
}

export function DeliverableRow({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reversed = false,
}: DeliverableRowProps) {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-16">
      {/* A imagem vem primeiro no DOM de propósito: no mobile (1 coluna) ela cai
          em cima do texto em todas as linhas, e a alternância acontece só do
          `lg:` pra cima, via `order`. */}
      <div
        style={imageClip.style}
        className={cn(
          'relative aspect-4/3 w-full overflow-hidden bg-accent',
          imageClip.className,
          reversed && 'lg:order-2',
        )}
      >
        {image ? (
          <img src={asset(image)} alt={imageAlt} width={900} height={675} className="h-full w-full object-cover" />
        ) : (
          // Enquanto os mockups não chegam: mesma moldura e proporção da imagem
          // final, pra seção já ocupar o espaço certo. Some sozinho assim que o
          // `image` do item for preenchido em content.ts.
          <div className="flex h-full w-full items-center justify-center">
            <HexPattern
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              className="pointer-events-none absolute inset-0 h-full w-full text-white/10"
            />
            <span className="relative font-display text-[13px] tracking-[0.2em] text-white/50 uppercase">
              Mockup pendente
            </span>
          </div>
        )}
      </div>

      <div className={cn('flex flex-col gap-3 text-left', reversed && 'lg:order-1')}>
        {/* O item do workshop vem sem `eyebrow` — o título dele já se anuncia. */}
        {eyebrow && (
          <span className="font-display text-[12px] font-bold tracking-[0.2em] text-text-on-light/50 uppercase lg:text-[13px]">
            {eyebrow}
          </span>
        )}
        <h3 className="font-h2 text-[22px] leading-[1.15] font-bold text-text-heading-on-light uppercase lg:text-[30px]">
          {title}
        </h3>
        <p className="text-[16px] leading-relaxed text-text-on-light lg:text-[18px]">{description}</p>
      </div>
    </div>
  )
}
