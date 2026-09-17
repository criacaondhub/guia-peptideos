import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { FOUNDER_CONTENT } from '@/v3/config/content'
import { chamferClipPath, responsiveClipPath } from '@/lib/clip-path'
import { asset, cn } from '@/lib/utils'

const IMAGE_CLIP_PATH = chamferClipPath(24)
const sectionClip = responsiveClipPath(chamferClipPath(48, ['tl', 'br']))

export function Founder() {
  return (
    <section
      id="founder"
      style={sectionClip.style}
      className={cn(
        // O chanfro `tl` recorta o canto e deixa aparecer o que está atrás — que
        // é o fundo do `body` (claro). Antes isso não se via, porque a seção
        // acima também era clara; com a prova social escura ali, virava um
        // triângulo branco. O `-mt-12` sobe a seção os mesmos 48px do chanfro,
        // pra que o recorte revele a seção de cima em vez do body, e o `pt`
        // devolve esses 48px por dentro pra não subir o conteúdo junto. Mesmo
        // recurso que `Price` e `FAQ` já usam.
        'relative z-10 flex justify-center bg-background px-[var(--spacing-section-x-mobile)] py-[var(--spacing-section-y-mobile)] lg:-mt-12 lg:px-[var(--spacing-section-x-desktop)] lg:pt-[calc(var(--spacing-section-y-desktop)+48px)] lg:pb-[var(--spacing-section-y-desktop)]',
        sectionClip.className,
      )}
    >
      <div className="flex w-full max-w-(--container-max) flex-col items-center justify-center gap-[var(--spacing-grid-gap-mobile)] lg:flex-row lg:items-center lg:gap-[var(--spacing-grid-gap-desktop)]">
        <motion.img
          src={asset('assets/sobre.webp')}
          alt={FOUNDER_CONTENT.imageAlt}
          width={675}
          height={900}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ clipPath: IMAGE_CLIP_PATH }}
          className="aspect-3/4 w-full shrink-0 bg-background-section object-cover lg:w-2/5"
        />

        <div className="flex w-fit min-w-0 flex-col items-start gap-4 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-fit text-[22px] leading-tight font-normal lg:text-[36px] lg:font-bold"
          >
            <span className="lg:hidden">
              {FOUNDER_CONTENT.title.mobileLines.map((line, lineIndex) => (
                <Fragment key={line.map((segment) => segment.text).join('')}>
                  {line.map((segment) => (
                    <span key={segment.text} className={segment.bold ? 'font-bold' : undefined}>
                      {segment.text}
                    </span>
                  ))}
                  {lineIndex < FOUNDER_CONTENT.title.mobileLines.length - 1 && <br />}
                </Fragment>
              ))}
            </span>
            <span className="hidden lg:inline">
              {FOUNDER_CONTENT.title.desktopLines.map((line, index) => (
                <Fragment key={line}>
                  {line}
                  {index < FOUNDER_CONTENT.title.desktopLines.length - 1 && <br />}
                </Fragment>
              ))}
            </span>
          </motion.h2>

          {FOUNDER_CONTENT.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph.mobile.map((segment) => segment.text).join('')}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 * (index + 1), ease: 'easeOut' }}
              className="w-fit text-[16px] font-normal text-text lg:text-[18px]"
            >
              <span className="lg:hidden">
                {paragraph.mobile.map((segment) => (
                  <span key={segment.text} className={segment.bold ? 'font-bold' : undefined}>
                    {segment.text}
                  </span>
                ))}
              </span>
              <span className="hidden lg:inline">
                {paragraph.desktopLines.map((line, lineIndex) => (
                  <Fragment key={line.map((segment) => segment.text).join('')}>
                    {line.map((segment) => (
                      <span key={segment.text} className={segment.bold ? 'font-bold' : undefined}>
                        {segment.text}
                      </span>
                    ))}
                    {lineIndex < paragraph.desktopLines.length - 1 && <br />}
                  </Fragment>
                ))}
              </span>
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
