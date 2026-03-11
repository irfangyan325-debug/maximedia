import type { Metadata } from 'next'
import AboutHero   from '@/components/about/AboutHero'
import AboutStats  from '@/components/about/AboutStats'
import AboutStory  from '@/components/about/AboutStory'
import AboutValues from '@/components/about/AboutValues'
import AboutTeam   from '@/components/about/AboutTeam'
import AboutCTA    from '@/components/about/AboutCTA'
import WhyChooseUs from '@/components/about/Whychooseus'
import CompanyTimeline from '@/components/about/Companytimeline'

export const metadata: Metadata = {
  title: 'About Us — Results-Driven Social Media Experts | MAXIMEDIA',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <WhyChooseUs />
      <AboutValues />
      <CompanyTimeline />
      <AboutTeam />
      <AboutCTA />
    </>
  )
}