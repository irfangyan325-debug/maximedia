import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const displayFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MAXIMEDIA: #1 Social Media Management Company & Marketing Agency',
    template: '%s | MAXIMEDIA',
  },
  description:
    'MAXIMEDIA is a results-driven social media marketing agency. Stop guessing, start growing. Partner with a social marketing agency focused on your bottom line.',
  keywords: [
    'social media marketing',
    'social media management',
    'social media agency',
    'influencer marketing',
    'paid social advertising',
  ],
  openGraph: {
    title: 'MAXIMEDIA: #1 Social Media Marketing Agency',
    description:
      'Stop Guessing, Start Growing. Partner with MAXIMEDIA for results-driven social media marketing.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
