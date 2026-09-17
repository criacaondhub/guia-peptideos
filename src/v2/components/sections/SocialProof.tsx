import { motion } from 'framer-motion'
import { SOCIAL_PROOF_CONTENT } from '@/v2/config/content'
import { CTA_CLIP_PATH, chamferClipPath, responsiveClipPath } from '@/lib/clip-path'
import { asset, cn } from '@/lib/utils'

const cardClip = responsiveClipPath(chamferClipPath(24))

// Os prints são telas de celular inteiras (720x1356), mas a conversa ocupa só o
// topo — o resto é papel de parede vazio do WhatsApp. O card corta em 780px de
// altura (~57%), que cobre a conversa mais longa (a do Dr. Augusto, que termina
// perto dos 700px) e ainda deixa uma folga embaixo. Sem isso, cada depoimento
// ocuparia o dobro da altura mostrando nada.
const CARD_ASPECT = 'aspect-[720/780]'

// Destaque sobre fundo escuro, o mesmo par usado na Hero da v2.
const HIGHLIGHT = 'font-bold text-text-heading-on-accent'

export function SocialProof() {
  return (
    <section
      id="depoimentos"
      className="relative flex justify-center overflow-hidden bg-accent px-[var(--spacing-section-x-mobile)] py-[var(--spacing-section-y-mobile)] lg:px-[var(--spacing-section-x-desktop)] lg:py-[var(--spacing-section-y-desktop)]"
    >
      <div className="flex w-full max-w-[1100px] flex-col items-center gap-10 lg:gap-14">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-h2 text-center text-[24px] leading-tight text-text-heading uppercase lg:text-4xl"
        >
          <span className="lg:hidden">
            {SOCIAL_PROOF_CONTENT.titleLinesMobile.map((line, lineIndex) => (
              <span key={line.map((segment) => segment.text).join('')}>
                {line.map((segment) => (
                  <span key={segment.text} className={segment.bold ? HIGHLIGHT : undefined}>
                    {segment.text}
                  </span>
                ))}
                {lineIndex < SOCIAL_PROOF_CONTENT.titleLinesMobile.length - 1 && <br />}
              </span>
            ))}
          </span>
          <span className="hidden lg:inline">
            {SOCIAL_PROOF_CONTENT.titleLines.map((line, lineIndex) => (
              <span key={line.map((segment) => segment.text).join('')}>
                {line.map((segment) => (
                  <span key={segment.text} className={segment.bold ? HIGHLIGHT : undefined}>
                    {segment.text}
                  </span>
                ))}
                {lineIndex < SOCIAL_PROOF_CONTENT.titleLines.length - 1 && <br />}
              </span>
            ))}
          </span>
        </motion.h2>

        {/* `flex-wrap` + `justify-center` em vez de grid: são 5 prints em 3
            colunas, e assim os dois da última linha ficam centralizados em vez
            de encostados à esquerda. */}
        <div className="flex w-full flex-wrap justify-center gap-5 lg:gap-8">
          {SOCIAL_PROOF_CONTENT.testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.image}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: 'easeOut' }}
              style={cardClip.style}
              className={cn(
                'w-full max-w-[380px] overflow-hidden border border-border sm:w-[calc(50%-0.625rem)] sm:max-w-none lg:w-[calc(33.333%-1.334rem)]',
                cardClip.className,
              )}
            >
              <img
                src={asset(testimonial.image)}
                alt={`Print de conversa no WhatsApp com ${testimonial.author}`}
                width={720}
                height={780}
                loading="lazy"
                className={cn('w-full object-cover object-top', CARD_ASPECT)}
              />
              {/* Transcrição do print: o depoimento em si é pixel dentro da
                  imagem, e sem isto não chega a leitor de tela nem a buscador. */}
              <figcaption className="sr-only">
                {testimonial.author}: “{testimonial.quote}” Resposta de Dr. Gustavo Sá: “{testimonial.reply}”
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Regra de inversão do design system: sobre fundo escuro o botão vai em
            `background` chapado. O degradê `accent → accent-hover` que o CTA do
            Unlock usa sumiria aqui, porque o fundo desta seção é o próprio
            `accent`. O brilho que atravessa no hover é o mesmo dos outros. */}
        <motion.a
          href={SOCIAL_PROOF_CONTENT.ctaHref}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{ clipPath: CTA_CLIP_PATH }}
          className="group relative inline-flex min-h-[44px] w-full items-center justify-center overflow-hidden bg-background px-8 py-5 text-center font-display text-[16px] leading-none text-white uppercase lg:w-auto lg:py-4 lg:text-base lg:leading-[1.5]"
        >
          <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -translate-x-[200%] skew-x-[-20deg] bg-white/25 transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
          <span className="lg:hidden">
            {SOCIAL_PROOF_CONTENT.ctaLabelLinesMobile.map((line, lineIndex) => (
              <span key={line}>
                {line}
                {lineIndex < SOCIAL_PROOF_CONTENT.ctaLabelLinesMobile.length - 1 && <br />}
              </span>
            ))}
          </span>
          <span className="hidden lg:inline">{SOCIAL_PROOF_CONTENT.ctaLabel}</span>
        </motion.a>
      </div>
    </section>
  )
}
