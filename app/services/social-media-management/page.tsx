import type { Metadata } from 'next'
import MgmtHero        from '@/components/management/MgmtHero'
import MgmtProcess     from '@/components/management/MgmtProcess'
import MgmtIntro     from '@/components/management/MgmtIntro'
import MgmtImportance  from '@/components/management/MgmtImportance'
import MgmtPlatforms   from '@/components/management/MgmtPlatforms'
import MgmtCaseStudies from '@/components/management/MgmtCaseStudies'
import MgmtFAQ         from '@/components/management/MgmtFAQ'
import MgmtCountdown from '@/components/management/MgmtCountdown'
import MgmtFiveElements from '@/components/management/MgmtFiveElements'

export const metadata: Metadata = {
  title: 'Social Media Management — MAXIMEDIA',
  description: 'Take your social media management to the next level. Data-driven strategies, thumb-stopping content, and full community management from THE social media agency.',
}

export default function SocialMediaManagementPage() {
  return (
    <>
      <MgmtHero />
      <MgmtIntro />
      <MgmtCountdown />
      <MgmtProcess />
      <MgmtImportance />
      <MgmtFiveElements />
      <MgmtPlatforms />
      <MgmtCaseStudies />
      <MgmtFAQ />
    </>
  )
}