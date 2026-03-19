import type { Metadata } from 'next'
import ContentHero         from '@/components/content/ContentHero'
import ContentStrategy     from '@/components/content/ContentStrategy'
import ContentProcess      from '@/components/content/ContentProcess'
import ContentCapabilities from '@/components/content/ContentCapabilities'
import ContentDeck         from '@/components/content/ContentDeck'
import ContentFAQ          from '@/components/content/ContentFAQ'

export const metadata: Metadata = {
  title: 'Social Content Production — MAXIMEDIA',
  description: 'Stand out with social media content that converts. Insight-driven content production: video, photography, graphics, motion, TikTok, and more from our in-house studio.',
}

export default function SocialContentProductionPage() {
  return (
    <>
      <ContentHero />
      <ContentStrategy />
      <ContentProcess />
      <ContentCapabilities />
      <ContentDeck />
      <ContentFAQ />
    </>
  )
}