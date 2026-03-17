import type { Metadata } from 'next'
import StrategyHero        from '@/components/strategy/StrategyHero'
import StrategyProcess     from '@/components/strategy/StrategyProcess'
import StrategyBenefits    from '@/components/strategy/StrategyBenefits'
import StrategyDeliverables from '@/components/strategy/StrategyDeliverables'
import StrategyIncludes    from '@/components/strategy/StrategyIncludes'
import StrategyPackages    from '@/components/strategy/StrategyPackages'
import StrategyFAQ         from '@/components/strategy/StrategyFAQ'
import StrategyCTA         from '@/components/strategy/StrategyCTA'

export const metadata: Metadata = {
  title: 'Social Media Strategy — MAXIMEDIA',
  description: 'Turn attention into action with a custom social media strategy built to maximize reach and ROI. Data-driven plans tailored to your brand.',
}

export default function SocialMediaStrategyPage() {
  return (
    <>
      <StrategyHero />
      <StrategyProcess />
      <StrategyBenefits />
      <StrategyDeliverables />
      <StrategyIncludes />
      <StrategyPackages />
      <StrategyFAQ />
      {/* <StrategyCTA /> */}
    </>
  )
}