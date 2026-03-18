import type { Metadata } from 'next'
import StudiosHero        from '@/components/studios/StudiosHero'
import StudiosVideography from '@/components/studios/StudiosVideography'
import StudiosHowItWorks  from '@/components/studios/StudiosHowItWorks'
import StudiosTestimonials from '@/components/studios/StudiosTestimonials'
import StudiosCTA         from '@/components/studios/StudiosCTA'

export const metadata: Metadata = {
  title: 'Studios — Social Content Production | MAXIMEDIA',
}

export default function StudiosPage() {
  return (
    <>
      <StudiosHero />
      <StudiosVideography />
      <StudiosHowItWorks />
      <StudiosTestimonials />
      <StudiosCTA />
    </>
  )
}