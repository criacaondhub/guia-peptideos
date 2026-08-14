import { motion } from 'framer-motion'
import { UNLOCK_CONTENT } from '@/config/content'
import { BenefitCard } from '@/components/ui/BenefitCard'
import { HexGridBackground } from '@/components/ui/HexGridBackground'
import { CTA_CLIP_PATH } from '@/lib/clip-path'

export function Unlock() {
  return (
    <section
      id="unlock"
      className="relative flex justify-center overflow-hidden bg-background-section px-[var(--spacing-section-x-mobile)] py-[var(--spacing-section-y-mobile)] lg:px-[var(--spacing-section-x-desktop)] lg:py-[var(--spacing-section-y-desktop)]"
    >
      <HexGridBackground corner="top-left" />
      <HexGridBackground corner="bottom-right" />
      <HexGridBackground corner="bottom-left" />

      <div className="relative z-10 flex w-full max-w-(--container-max) flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        <div className="order-2 flex w-full max-w-[500px] justify-center lg:order-1 lg:max-w-none lg:flex-1">
          {UNLOCK_CONTENT.boxes.map((box, index) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="w-full max-w-[420px]"
            >
              <BenefitCard {...box} />
            </motion.div>
          ))}
        </div>

        <div className="order-1 flex flex-col items-center gap-4 text-center lg:order-2 lg:flex-1 lg:items-start lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-h2 text-[24px] leading-tight text-text-heading-on-light uppercase lg:text-4xl"
          >
            <span className="lg:hidden">
              {UNLOCK_CONTENT.titleLinesMobile.map((line, lineIndex) => (
                <span key={line}>
                  {line}
                  {lineIndex < UNLOCK_CONTENT.titleLinesMobile.length - 1 && <br />}
                </span>
              ))}
            </span>
            <span className="hidden lg:inline">{UNLOCK_CONTENT.title}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="font-h2 max-w-2xl text-[18px] text-text-on-light lg:text-[22px]"
          >
            <span className="lg:hidden">
              {UNLOCK_CONTENT.subtitleLinesMobile.map((line, lineIndex) => (
                <span key={line}>
                  {line}
                  {lineIndex < UNLOCK_CONTENT.subtitleLinesMobile.length - 1 && <br />}
                </span>
              ))}
            </span>
            <span className="hidden lg:inline">{UNLOCK_CONTENT.subtitle}</span>
          </motion.p>

          <motion.a
            href={UNLOCK_CONTENT.ctaHref}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{ clipPath: CTA_CLIP_PATH }}
            className="mt-2 inline-flex w-full min-h-[44px] items-center justify-center bg-accent px-8 py-5 text-center font-display text-[16px] leading-none text-white uppercase transition-colors hover:bg-accent-hover lg:w-auto lg:py-4 lg:text-base lg:leading-[1.5]"
          >
            <span className="lg:hidden">
              {UNLOCK_CONTENT.ctaLabelLinesMobile.map((line, lineIndex) => (
                <span key={line}>
                  {line}
                  {lineIndex < UNLOCK_CONTENT.ctaLabelLinesMobile.length - 1 && <br />}
                </span>
              ))}
            </span>
            <span className="hidden lg:inline">{UNLOCK_CONTENT.ctaLabel}</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
