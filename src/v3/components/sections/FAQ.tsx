import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQ_CONTENT } from '@/v3/config/content'
import { chamferClipPath, responsiveClipPath } from '@/lib/clip-path'
import { cn } from '@/lib/utils'

const sectionClip = responsiveClipPath(chamferClipPath(48, ['tl', 'tr']))

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      style={sectionClip.style}
      className={cn(
        'relative z-10 flex w-full flex-col items-center bg-background-section px-[var(--spacing-section-x-mobile)] py-[var(--spacing-section-y-mobile)] lg:-mt-12 lg:px-[var(--spacing-section-x-desktop)] lg:py-[var(--spacing-section-y-desktop)]',
        sectionClip.className,
      )}
    >
      <div className="flex w-full max-w-[1000px] flex-col items-center gap-10 lg:gap-[60px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-h2 max-lg:text-center max-lg:leading-tight text-[30px] text-text-heading-on-light uppercase lg:text-4xl"
        >
          {FAQ_CONTENT.title}
        </motion.h2>

        <div className="w-full border-t border-text-on-light/10">
          {FAQ_CONTENT.items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.question} className="border-b border-text-on-light/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-8 py-8 text-left transition-colors lg:py-10"
                >
                  <span className="font-display text-[20px] font-bold text-accent lg:text-[24px]">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-text-on-light/5 transition-colors group-hover:bg-accent/20"
                  >
                    <Plus size={16} className="text-text-on-light" aria-hidden="true" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-[16px] leading-relaxed text-text-on-light/70 lg:pb-10 lg:text-[20px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
