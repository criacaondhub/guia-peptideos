import { ReactLenis } from 'lenis/react'
import { Hero } from '@/v2/components/sections/Hero'
import { Unlock } from '@/v2/components/sections/Unlock'
import { SocialProof } from '@/v2/components/sections/SocialProof'
import { Founder } from '@/v2/components/sections/Founder'
import { Price } from '@/v2/components/sections/Price'
import { FAQ } from '@/v2/components/sections/FAQ'
import { Footer } from '@/v2/components/sections/Footer'

export function LandingPage() {
  return (
    <ReactLenis root>
      <main>
        <Hero />
        <Unlock />
        <SocialProof />
        <Founder />
        <Price />
        <FAQ />
      </main>
      <Footer />
    </ReactLenis>
  )
}
