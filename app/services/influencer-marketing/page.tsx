import type { Metadata } from 'next'
import InfluencerHero       from '@/components/influencer/InfluencerHero'
import InfluencerWhy        from '@/components/influencer/InfluencerWhy'
import InfluencerProcess    from '@/components/influencer/InfluencerProcess'
import InfluencerLevelUp    from '@/components/influencer/InfluencerLevelUp'
import InfluencerTypes      from '@/components/influencer/InfluencerTypes'
import InfluencerFAQ        from '@/components/influencer/InfluencerFAQ'

export const metadata: Metadata = {
  title: 'Influencer Marketing — MAXIMEDIA',
  description: 'Run hyper-targeted influencer campaigns that actually deliver. Full-service influencer marketing: sourcing, negotiating, content coordination, and performance tracking.',
}

export default function InfluencerMarketingPage() {
  return (
    <>
      <InfluencerHero />
      <InfluencerWhy />
      <InfluencerProcess />
      <InfluencerLevelUp />
      <InfluencerFAQ />
    </>
  )
}