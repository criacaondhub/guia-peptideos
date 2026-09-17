import { FOOTER_CONTENT } from '@/v2/config/content'
import { Logo } from '@/v2/components/ui/Logo'

export function Footer() {
  return (
    <footer className="border-t border-border bg-accent px-[24px] py-[40px] lg:px-[56px] lg:py-[56px]">
      <div className="mx-auto flex w-full max-w-(--container-max) flex-col items-center gap-4 text-center">
        <Logo className="h-8 w-auto text-white lg:h-12" aria-label="Manual Completo Peptídeos" role="img" />

        <p className="text-[14px] font-bold text-text-heading-on-accent lg:text-[16px]">
          {FOOTER_CONTENT.copyright}
        </p>

        <p className="max-w-[480px] text-[14px] leading-[1.5] text-text/50 lg:text-[16px]">
          {FOOTER_CONTENT.disclaimer}
        </p>

        <p className="text-[13px] text-text/50 lg:text-[14px]">
          {FOOTER_CONTENT.credit.prefix}
          <a
            href={FOOTER_CONTENT.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-heading-on-accent underline underline-offset-2 hover:opacity-80"
          >
            {FOOTER_CONTENT.credit.name}
          </a>
        </p>
      </div>
    </footer>
  )
}
