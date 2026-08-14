import { motion } from 'framer-motion'
import { CheckCircle2, LockOpen } from 'lucide-react'
import { PRICE_CONTENT } from '@/config/content'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/lib/utils'
import { withUtmParams } from '@/lib/utm'
import { CTA_CLIP_PATH, chamferClipPath, responsiveClipPath } from '@/lib/clip-path'

const cardClip = responsiveClipPath(chamferClipPath(24))
const CTA_GRADIENT = 'linear-gradient(90deg, var(--color-accent), var(--color-accent-hover))'
const CARD_BACKGROUND = 'linear-gradient(180deg, #ffffff, #f0f8ff)'
const CARD_BORDER_GRADIENT = 'linear-gradient(135deg, rgba(240, 248, 255, 0.9), rgba(240, 248, 255, 0.15))'
const CARD_GLOW = 'drop-shadow(0 0 60px var(--color-background)) drop-shadow(0 0 100px rgba(18, 24, 39, 0.55))'

function LogoStripe({ tone, logoClassName, className }: { tone: string; logoClassName: string; className?: string }) {
  return (
    <div className={cn('flex h-16 items-center gap-12', tone, className)}>
      {Array.from({ length: 24 }).map((_, index) => (
        <Logo key={index} className={cn('h-6 w-auto shrink-0', logoClassName)} aria-hidden="true" />
      ))}
    </div>
  )
}

export function Price() {
  return (
    <section
      id="preco"
      className="relative flex justify-center overflow-hidden bg-accent px-[var(--spacing-section-x-mobile)] py-[var(--spacing-section-y-mobile)] lg:-mt-12 lg:px-[var(--spacing-section-x-desktop)] lg:pt-[calc(var(--spacing-section-y-desktop)+48px)] lg:pb-[calc(var(--spacing-section-y-desktop)+48px)]"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 hidden w-[220vw] -translate-x-1/2 -translate-y-1/2 rotate-6 lg:block">
        <LogoStripe tone="bg-background" logoClassName="text-white" />
      </div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 hidden w-[220vw] -translate-x-1/2 -translate-y-1/2 -rotate-6 lg:block">
        <LogoStripe tone="bg-background-section" logoClassName="text-background" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ ...cardClip.style, background: CARD_BORDER_GRADIENT, filter: CARD_GLOW }}
        className={cn('relative z-10 w-full max-w-[440px] p-px', cardClip.className)}
      >
        <div
          style={{ ...cardClip.style, background: CARD_BACKGROUND }}
          className={cn('flex flex-col items-center gap-6 p-6 lg:gap-8 lg:p-10', cardClip.className)}
        >
          <Logo className="h-[34px] w-auto text-text-heading-on-light lg:h-10" aria-label="Manual Completo Peptídeos" role="img" />

          <ul className="flex w-full flex-col gap-3 text-left">
            {PRICE_CONTENT.checks.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[16px] font-normal text-text-on-light lg:text-[18px]">
                <CheckCircle2 size={20} className="shrink-0 text-text-heading-on-light" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-[14px] text-text-on-light/60 lg:text-[16px]">
              <span className="line-through">DE {PRICE_CONTENT.price.oldPrice}</span> POR APENAS:
            </p>
            <p className="text-[48px] leading-none font-bold text-text-heading-on-light lg:text-[64px]">
              {PRICE_CONTENT.price.newPrice}
            </p>
            <p className="text-[13px] text-text-on-light/60 lg:text-[14px]">
              12x de {PRICE_CONTENT.price.installment}
            </p>
          </div>

          <div className="h-px w-full bg-text-on-light/10" />

          <motion.a
            href={withUtmParams(PRICE_CONTENT.ctaHref)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{ background: CTA_GRADIENT, clipPath: CTA_CLIP_PATH }}
            className="group relative inline-flex min-h-[64px] w-full items-center justify-center gap-3 overflow-hidden px-4 py-6 text-center font-display text-[16px] leading-none text-white uppercase shadow-lg lg:px-8 lg:leading-[1.5]"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -translate-x-[200%] skew-x-[-20deg] bg-white/25 transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
            <LockOpen size={20} aria-hidden="true" />
            <span className="lg:hidden">
              {PRICE_CONTENT.ctaLabelLinesMobile.map((line, lineIndex) => (
                <span key={line}>
                  {line}
                  {lineIndex < PRICE_CONTENT.ctaLabelLinesMobile.length - 1 && <br />}
                </span>
              ))}
            </span>
            <span className="hidden lg:inline">{PRICE_CONTENT.ctaLabel}</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
