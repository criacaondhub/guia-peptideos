import { motion } from 'framer-motion'
import { UNLOCK_CONTENT } from '@/v3/config/content'
import { DeliverableRow } from '@/v3/components/ui/DeliverableRow'
import { HexGridBackground } from '@/v3/components/ui/HexGridBackground'
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

      <div className="relative z-10 flex w-full max-w-(--container-max) flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-h2 text-[24px] leading-tight text-balance text-text-heading-on-light lg:text-4xl"
          >
            <span className="lg:hidden">
              {UNLOCK_CONTENT.titleLinesMobile.map((line, lineIndex) => (
                <span key={line.map((segment) => segment.text).join('')}>
                  {line.map((segment) => (
                    <span key={segment.text} className={segment.highlight ? 'text-accent' : undefined}>
                      {segment.text}
                    </span>
                  ))}
                  {lineIndex < UNLOCK_CONTENT.titleLinesMobile.length - 1 && <br />}
                </span>
              ))}
            </span>
            <span className="hidden lg:inline">
              {UNLOCK_CONTENT.titleLines.map((line, lineIndex) => (
                <span key={line.map((segment) => segment.text).join('')}>
                  {line.map((segment) => (
                    <span key={segment.text} className={segment.highlight ? 'text-accent' : undefined}>
                      {segment.text}
                    </span>
                  ))}
                  {lineIndex < UNLOCK_CONTENT.titleLines.length - 1 && <br />}
                </span>
              ))}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="font-h2 max-w-2xl text-[18px] text-text-on-light lg:max-w-none lg:text-[22px]"
          >
            <span className="lg:hidden">
              {UNLOCK_CONTENT.subtitleLinesMobile.map((line, lineIndex) => (
                <span key={line}>
                  {line}
                  {lineIndex < UNLOCK_CONTENT.subtitleLinesMobile.length - 1 && <br />}
                </span>
              ))}
            </span>
            <span className="hidden lg:inline">
              {UNLOCK_CONTENT.subtitleLines.map((line, lineIndex) => (
                <span key={line}>
                  {line}
                  {lineIndex < UNLOCK_CONTENT.subtitleLines.length - 1 && <br />}
                </span>
              ))}
            </span>
          </motion.p>
        </div>

        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-12 lg:gap-20">
          {UNLOCK_CONTENT.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Ímpares invertem no desktop: imagem à direita, texto à esquerda. */}
              <DeliverableRow {...item} reversed={index % 2 === 1} />
            </motion.div>
          ))}
        </div>

        <motion.a
          href={UNLOCK_CONTENT.ctaHref}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{ clipPath: CTA_CLIP_PATH }}
          className="inline-flex w-full min-h-[44px] items-center justify-center bg-accent px-8 py-5 text-center font-display text-[16px] leading-none text-white uppercase transition-colors hover:bg-accent-hover lg:w-auto lg:py-4 lg:text-base lg:leading-[1.5]"
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
    </section>
  )
}
