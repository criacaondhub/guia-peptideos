import { ReactLenis } from 'lenis/react'
import { Hero } from '@/components/sections/Hero'
import { Unlock } from '@/components/sections/Unlock'
import { Founder } from '@/components/sections/Founder'
import { Price } from '@/components/sections/Price'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'

function App() {
  return (
    <ReactLenis root>
      <main>
        <Hero />
        <Unlock />
        <Founder />
        <Price />
        <FAQ />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App
