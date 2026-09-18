import { motion } from 'framer-motion'
import { ArrowRight, Lock, Zap } from 'lucide-react'
import { HERO_CONTENT } from '@/v3/config/content'
import { Logo } from '@/v3/components/ui/Logo'
import { CTA_CLIP_PATH, chamferClipPath, responsiveClipPath } from '@/lib/clip-path'
import { asset, cn } from '@/lib/utils'

const HERO_CLIP_PATH = chamferClipPath(48, ['br'])
const heroClip = responsiveClipPath(HERO_CLIP_PATH)

// Regra de inversão do design system: sobre fundo escuro o CTA vai em `background`
// (o azul da marca) chapado, não no degradê `accent → accent-hover`, que sumiria
// contra o `accent` do fundo. Agora vale nos dois breakpoints — mobile e desktop
// têm arte escura.
const CTA_SURFACE = 'bg-background'

export function Hero() {
  return (
    <section
      id="hero"
      style={heroClip.style}
      className={cn(
        'relative flex flex-col justify-start overflow-hidden bg-accent px-[var(--spacing-section-x-mobile)] py-[var(--spacing-section-y-mobile)] lg:h-screen lg:flex-row lg:justify-start lg:bg-background-section lg:px-[var(--spacing-section-x-desktop)] lg:py-[var(--spacing-section-y-desktop)]',
        heroClip.className,
      )}
    >
      <img
        src={asset('assets/banner-hero-desk-v2.webp')}
        alt=""
        width={2000}
        height={1160}
        className="pointer-events-none absolute inset-0 m-auto hidden h-auto w-full object-contain lg:block"
      />

      <img
        src={asset('assets/banner-hero-mobile-v2.webp')}
        alt="Manual Completo Peptídeos"
        width={900}
        height={527}
        fetchPriority="high"
        className="-mx-[var(--spacing-section-x-mobile)] -mt-[var(--spacing-section-y-mobile)] -mb-[30px] w-[calc(100%+var(--spacing-section-x-mobile)*2)] max-w-none lg:hidden"
      />

      <div className="relative z-10 flex w-full max-w-(--container-max) flex-col items-center justify-center gap-8 text-center lg:ml-[140px] lg:max-w-none lg:items-start lg:gap-7 lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-4 hidden lg:block"
        >
          <Logo className="h-14 w-auto text-white" aria-label="Manual Completo Peptídeos" role="img" />
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-4xl text-[30px] leading-[0.95] text-white lg:max-w-[900px] lg:text-[48px]"
          >
            <span className="lg:hidden">
              {HERO_CONTENT.titleLinesMobile.map((line, lineIndex) => (
                <span key={line.map((segment) => segment.text).join('')}>
                  {line.map((segment) => (
                    <span
                      key={segment.text}
                      className={cn(segment.bold && 'font-bold', segment.accent && 'text-text-heading-on-accent')}
                    >
                      {segment.text}
                    </span>
                  ))}
                  {lineIndex < HERO_CONTENT.titleLinesMobile.length - 1 && <br />}
                </span>
              ))}
            </span>
            <span className="hidden lg:inline">
              {HERO_CONTENT.titleLines.map((line, lineIndex) => (
                <span key={line.map((segment) => segment.text).join('')}>
                  {line.map((segment) => (
                    <span
                      key={segment.text}
                      className={cn(segment.bold && 'font-bold', segment.accent && 'text-text-heading-on-accent')}
                    >
                      {segment.text}
                    </span>
                  ))}
                  {lineIndex < HERO_CONTENT.titleLines.length - 1 && <br />}
                </span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="font-h2 max-w-[900px] text-[18px] leading-snug text-white/90 lg:text-[22px]"
          >
            <span className="lg:hidden">
              {HERO_CONTENT.subtitleLinesMobile.map((line, lineIndex) => (
                <span key={line.map((segment) => segment.text).join('')}>
                  {line.map((segment) => (
                    <span key={segment.text} className={segment.bold ? 'font-bold text-white' : undefined}>
                      {segment.text}
                    </span>
                  ))}
                  {lineIndex < HERO_CONTENT.subtitleLinesMobile.length - 1 && <br />}
                </span>
              ))}
            </span>
            <span className="hidden lg:inline">
              {HERO_CONTENT.subtitleLines.map((line, lineIndex) => (
                <span key={line.map((segment) => segment.text).join('')}>
                  {line.map((segment) => (
                    <span key={segment.text} className={segment.bold ? 'font-bold text-white' : undefined}>
                      {segment.text}
                    </span>
                  ))}
                  {lineIndex < HERO_CONTENT.subtitleLines.length - 1 && <br />}
                </span>
              ))}
            </span>
          </motion.p>
        </div>

        <div className="flex w-full flex-col items-center gap-6 lg:w-auto">
          <motion.a
            href={HERO_CONTENT.ctaHref}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            style={{ clipPath: CTA_CLIP_PATH }}
            className={cn(
              'group relative inline-flex w-full min-h-[64px] items-center justify-center gap-2 overflow-hidden px-6 py-5 text-center font-display leading-none text-white uppercase shadow-lg lg:w-auto lg:gap-3 lg:px-12 lg:py-6 lg:leading-[1.5]',
              CTA_SURFACE,
            )}
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -translate-x-[200%] skew-x-[-20deg] bg-white/25 transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
            <span className="text-[16px] font-bold lg:text-lg">{HERO_CONTENT.ctaLabel}</span>
            <ArrowRight size={20} className="shrink-0 lg:hidden" aria-hidden="true" />
            <ArrowRight size={28} className="hidden shrink-0 lg:block" aria-hidden="true" />
          </motion.a>

          <div className="flex w-full justify-center lg:w-auto">
            <img
              src={asset('assets/imgi_4_card-logos.svg')}
              alt="Bandeiras e formas de pagamento aceitas"
              width={481}
              height={24}
              className="h-4 w-auto"
            />
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:w-auto">
            <span className="inline-flex items-center gap-2 text-[16px] font-medium text-white/90 lg:text-sm">
              <Zap size={16} className="text-white/90" aria-hidden="true" />
              Acesso imediato
            </span>
            <span className="inline-flex items-center gap-2 text-[16px] font-medium text-white/90 lg:text-sm">
              <Lock size={16} className="text-white/90" aria-hidden="true" />
              Pagamento seguro
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
