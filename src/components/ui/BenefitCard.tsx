import { Fragment } from 'react'
import { chamferClipPath, responsiveClipPath } from '@/lib/clip-path'
import { asset, cn } from '@/lib/utils'

const cardClip = responsiveClipPath(chamferClipPath(24))

interface BenefitCardProps {
  title: string
  titleDesktopLines: readonly string[]
  description: string
  image: string
  imageAlt: string
}

export function BenefitCard({ title, titleDesktopLines, description, image, imageAlt }: BenefitCardProps) {
  return (
    <div
      style={cardClip.style}
      className={cn('flex h-full flex-col border border-border bg-surface backdrop-blur-md', cardClip.className)}
    >
      <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-background">
        <img src={asset(image)} alt={imageAlt} width={900} height={675} className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-2 bg-accent p-5 text-left lg:p-6">
        <h3 className="font-display text-[20px] leading-[1.2] font-bold tracking-wide text-text-heading-on-accent uppercase lg:text-[24px]">
          <span className="lg:hidden">{title}</span>
          <span className="hidden lg:inline">
            {titleDesktopLines.map((line, index) => (
              <Fragment key={line}>
                {line}
                {index < titleDesktopLines.length - 1 && <br />}
              </Fragment>
            ))}
          </span>
        </h3>

        <p className="text-[16px] leading-[1.5] font-normal text-text-muted lg:text-[18px]">{description}</p>
      </div>
    </div>
  )
}
