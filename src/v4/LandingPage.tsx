import { ReactLenis } from 'lenis/react'
import { Hero } from '@/v4/components/sections/Hero'
import { Unlock } from '@/v4/components/sections/Unlock'
import { SocialProof } from '@/v4/components/sections/SocialProof'
import { Founder } from '@/v4/components/sections/Founder'
import { Price } from '@/v4/components/sections/Price'
import { FAQ } from '@/v4/components/sections/FAQ'
import { Footer } from '@/v4/components/sections/Footer'

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
