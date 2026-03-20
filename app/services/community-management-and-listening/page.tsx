import type { Metadata } from 'next'
import CommunityHero             from '@/components/community/CommunityHero'
import CommunityIntro            from '@/components/community/CommunityIntro'
import CommunityHowItWorks       from '@/components/community/CommunityHowItWorks'
import CommunityWhatWeDo         from '@/components/community/CommunityWhatWeDo'
import CommunityHumanTouch       from '@/components/community/CommunityHumanTouch'
import CommunityMomentsMarketing from '@/components/community/CommunityMomentsMarketing'
import CommunityOutbound         from '@/components/community/CommunityOutbound'
import CommunityFAQ              from '@/components/community/CommunityFAQ'

export const metadata: Metadata = {
  title: 'Community Management & Listening — MAXIMEDIA',
  description: 'Your partner in social engagement. We manage and build communities, turning followers into loyal advocates through authentic conversations and meaningful engagement.',
}

export default function CommunityManagementPage() {
  return (
    <>
      <CommunityHero />
      {/* <CommunityIntro /> */}
      <CommunityHowItWorks />
      <CommunityWhatWeDo />
      {/* <CommunityHumanTouch /> */}
      {/* <CommunityMomentsMarketing /> */}
      {/* <CommunityOutbound /> */}
      <CommunityFAQ />
    </>
  )
}