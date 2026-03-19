import type { Metadata } from 'next'
import PaidHero          from '@/components/paid/PaidHero'
import PaidCostEffective from '@/components/paid/PaidCostEffective'
import PaidTargeting     from '@/components/paid/PaidTargeting'
import PaidProcess       from '@/components/paid/PaidProcess'
import PaidAdWaste       from '@/components/paid/PaidAdWaste'
import PaidStaySharp     from '@/components/paid/PaidStaySharp'
import PaidPlatforms     from '@/components/paid/PaidPlatforms'
import PaidFAQ           from '@/components/paid/PaidFAQ'

export const metadata: Metadata = {
  title: 'Paid Social Advertising — MAXIMEDIA',
  description: 'Unlock the power of ads with paid social media advertising. Maximize the impact of your campaigns with precise targeting, smart creative, and relentless optimization.',
}

export default function PaidSocialAdvertisingPage() {
  return (
    <>
      <PaidHero />
      {/* <PaidCostEffective />
      <PaidTargeting /> */}
      <PaidAdWaste />
      <PaidProcess />
      {/* <PaidStaySharp /> */}
      {/* <PaidPlatforms /> */}
      <PaidFAQ />
    </>
  )
}