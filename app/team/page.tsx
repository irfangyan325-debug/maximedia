import type { Metadata } from 'next'
import TeamHero    from '@/components/team/TeamHero'
import TeamStats   from '@/components/team/TeamStats'
import TeamLeaders from '@/components/team/TeamLeaders'
import TeamGrid    from '@/components/team/TeamGrid'
// If the file is named TeamGrid.tsx and located at /components/team/TeamGrid.tsx, this is correct.
// Otherwise, update the path, for example:
// import TeamGrid from '@/components/team/TeamGrid.tsx'
// or
// import TeamGrid from '../../components/team/TeamGrid'
// import TeamCulture from '@/components/team/TeamCulture'
// import TeamValues  from '@/components/team/TeamValues'
// import TeamReviews from '@/components/team/TeamReviews'
// import TeamCTA     from '@/components/team/TeamCTA'

export const metadata: Metadata = {
  title: 'Our Team — Meet the MAXIMEDIA Family',
  description: 'Meet the talented, diverse team behind MAXIMEDIA — passionate social media experts driving real results for brands worldwide.',
}

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      {/* <TeamStats /> */}
      <TeamLeaders />
      <TeamGrid />
      {/* <TeamCulture />
      <TeamValues />
      <TeamReviews />
      <TeamCTA /> */}
    </>
  )
}