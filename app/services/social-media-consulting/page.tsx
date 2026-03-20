import type { Metadata } from 'next'
import ConsultingHero        from '@/components/consulting/ConsultingHero'
import ConsultingWhy         from '@/components/consulting/ConsultingWhy'
import ConsultingTeam        from '@/components/consulting/ConsultingTeam'
import ConsultingProcess     from '@/components/consulting/ConsultingProcess'
import ConsultingBenefits    from '@/components/consulting/ConsultingBenefits'
import ConsultingPackages    from '@/components/consulting/ConsultingPackages'
import ConsultingCustomHours from '@/components/consulting/ConsultingCustomHours'
import ConsultingFAQ         from '@/components/consulting/ConsultingFAQ'

export const metadata: Metadata = {
  title: 'Social Media Consulting — MAXIMEDIA',
  description: 'Ready to stop guessing and start growing? Our social media consulting packages provide expert guidance, custom strategy, and measurable results.',
}

export default function SocialMediaConsultingPage() {
  return (
    <>
      <ConsultingHero />
      <ConsultingWhy />
      <ConsultingTeam />
      <ConsultingProcess />
      <ConsultingPackages />
      {/* <ConsultingCustomHours /> */}
      <ConsultingFAQ />
    </>
  )
}