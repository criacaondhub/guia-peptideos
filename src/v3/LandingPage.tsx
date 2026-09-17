import { ReactLenis } from 'lenis/react'
import { Hero } from '@/v3/components/sections/Hero'
import { Unlock } from '@/v3/components/sections/Unlock'
import { SocialProof } from '@/v3/components/sections/SocialProof'
import { Founder } from '@/v3/components/sections/Founder'
import { Price } from '@/v3/components/sections/Price'
import { FAQ } from '@/v3/components/sections/FAQ'
import { Footer } from '@/v3/components/sections/Footer'

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
