import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSectionn'
import PainPointsSection from '@/components/sections/PainPointsSection'
import DeliversSection from '@/components/sections/DeliversSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import AreYouInBanner from '@/components/sections/AreYouInBanner'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import PricingSection from '@/components/sections/PricingSection'
import BrandsSection from '@/components/sections/BrandsSection'
import ContactSection from '@/components/sections/ContactSection'
import BlogPreviewSection from '@/components/sections/BlogPreviewSection'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'MAXIMEDIA: #1 Social Media Management Company & Marketing Agency',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      {/* <DeliversSection /> */}
      <ServicesSection />
      {/* <CaseStudiesSection /> */}
      <AreYouInBanner />
      <WhyChooseSection />
      <TestimonialsSection />
      <ProcessSection />
      <PricingSection />
      {/* <BrandsSection /> */}
      <ContactSection />
      <BlogPreviewSection />
      <CtaSection />
    </>
  )
}
