import type { Metadata } from 'next'
import WorkHero         from '@/components/work/WorkHero'
import WorkStats        from '@/components/work/WorkStats'
import WorkCaseStudies  from '@/components/work/WorkCaseStudies'
import WorkWhatWeDo     from '@/components/work/WorkWhatWeDo'
import WorkWhyChooseUs  from '@/components/work/WorkWhyChooseUs'
import WorkTestimonials from '@/components/work/WorkTestimonials'
import WorkCTA          from '@/components/work/WorkCTA'

export const metadata: Metadata = {
  title: 'Our Work — Case Studies & Client Results',
}

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkStats />
      <WorkCaseStudies />
      <WorkWhatWeDo />
      <WorkWhyChooseUs />
      <WorkTestimonials />
      <WorkCTA />
    </>
  )
}