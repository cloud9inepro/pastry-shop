import { HeroContent } from './HeroContent'
import { HeroShowcase } from './HeroShowcase'

export const HeroSection = () => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-16 bg-[#f5c9c0]">
      <HeroContent />
      <HeroShowcase />
    </section>
  )
}