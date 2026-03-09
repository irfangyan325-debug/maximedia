
export const SITE = {
  name: 'MAXIMEDIA',
  tagline: '#1 Social Media Management Company & Marketing Agency',
  description:
    'MAXIMEDIA is a results-driven social media marketing agency. Stop guessing, start growing. Partner with a social marketing agency focused on your bottom line.',
  email: 'info@maximedia.com',
  phone: '(000) 000-0000',
  address: 'Your Address Here, Suite 100',
  city: 'City, State ZIP',
  twitter: 'https://twitter.com/maximedia',
  linkedin: 'https://linkedin.com/company/maximedia',
  instagram: 'https://instagram.com/maximedia',
  facebook: 'https://facebook.com/maximedia',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Our Team', href: '/team' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Social Media Strategy', href: '/services#strategy' },
      { label: 'Social Media Management', href: '/services#management' },
      { label: 'Community Management', href: '/services#community' },
      { label: 'Social Content Production', href: '/services#content' },
      { label: 'Paid Social Advertising', href: '/services#paid' },
      { label: 'Influencer Marketing', href: '/services#influencer' },
      { label: 'Social Selling', href: '/services#selling' },
      { label: 'Social Media Consulting', href: '/services#consulting' },
      { label: 'Outbound Engagement', href: '/services#outbound' },
      { label: 'Data Analysis & ROI Modeling', href: '/services#data' },
    ],
  },
  { label: 'Studios', href: '/studios' },
  { label: 'Work', href: '/work' },
  {
    label: 'Blog',
    href: '/blog',
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'Resources', href: '/blog#resources' },
    ],
  },
]

export const STATS = [
  { number: '500+', label: 'Brands Served' },
  { number: '$50M+', label: 'Ad Spend Managed' },
  { number: '98%', label: 'Client Retention' },
]

export const CLIENT_LOGOS = [
  'SAMSUNG', 'MARRIOTT', 'CARNIVAL', 'NIKON', 'ASUS', 'ANGI',
  'NETAPP', 'SNAP-ON', 'PACCAR', 'CONEXPO', "DICK'S SPORTING GOODS",
  'NEXANS', 'SHOKZ', 'FLOOR & DECOR', 'FIRSTRADE', 'EDIBLE ARRANGEMENTS',
  'RUSH ENTERPRISES', 'PERFORMANCE HEALTH', 'GOLF GALAXY', 'LEXINGTON LAW',
]

export const PAIN_POINTS = [
  { icon: '📉', title: 'Lack of Leads or Sales from Social?' },
  { icon: '🌀', title: 'Struggling to Keep Up with Trends & Platforms?' },
  { icon: '📊', title: 'Unsure How to Measure Social Media ROI?' },
  { icon: '🎨', title: 'Lacking in Creative Production Capabilities?' },
]

export const SERVICES = [
  {
    id: 'strategy',
    icon: '🗺️',
    title: 'Social Media Strategy & Consulting',
    href: '/services#strategy',
    points: [
      'Building Your Roadmap for Social Success',
      'Competitor Analysis & Audience Insights',
      'Platform Selection & Content Pillars',
    ],
  },
  {
    id: 'content',
    icon: '🎬',
    title: 'Creative Content Production',
    href: '/services#content',
    points: [
      'Engaging Visuals & Copy That Resonates',
      'Video Production, Graphics & Photography',
      'Tailored Content for Each Platform',
    ],
  },
  {
    id: 'management',
    icon: '💬',
    title: 'Social Media Management & Community',
    href: '/services#management',
    points: [
      'Consistent Posting & Brand Voice Management',
      'Proactive Community Building & Interaction',
      'Reputation Monitoring & Management',
    ],
  },
  {
    id: 'paid',
    icon: '💰',
    title: 'Paid Social Advertising Campaigns',
    href: '/services#paid',
    points: [
      'Targeted Ad Campaigns for Leads & Sales',
      'Ad Creative Development & A/B Testing',
      'Budget Optimization & Performance Tracking',
    ],
  },
  {
    id: 'influencer',
    icon: '🌟',
    title: 'Influencer Marketing Programs',
    href: '/services#influencer',
    points: [
      'Connecting Your Brand with Authentic Voices',
      'Campaign Strategy & Influencer Vetting',
      'Performance Measurement & Reporting',
    ],
  },
  {
    id: 'selling',
    icon: '🎯',
    title: 'Social Selling & Outbound Engagement',
    href: '/services#selling',
    points: [
      'Leveraging Social for Direct Sales & Lead Gen',
      'Prospecting and Outreach Strategies',
      'Maintaining Consistent Executive Leadership',
    ],
  },
  {
    id: 'community',
    icon: '📡',
    title: 'Community Management & Listening',
    href: '/services#community',
    points: [
      'Real-time Community Monitoring',
      'Crisis Management & Response',
      'Sentiment Analysis & Reporting',
    ],
  },
  {
    id: 'consulting',
    icon: '🔍',
    title: 'Social Media Consulting',
    href: '/services#consulting',
    points: [
      'Social Audits & Competitive Analysis',
      'Team Training & Workshops',
      'Strategy Reviews & Roadmaps',
    ],
  },
  {
    id: 'outbound',
    icon: '📬',
    title: 'Outbound Engagement',
    href: '/services#outbound',
    points: [
      'Proactive Brand Outreach',
      'Partnership & Collaboration Identification',
      'Engagement Campaign Management',
    ],
  },
  {
    id: 'data',
    icon: '📈',
    title: 'Data Analysis & ROI Modeling',
    href: '/services#data',
    points: [
      'Custom KPI Dashboards & Reporting',
      'Attribution Modeling',
      'Revenue Impact Analysis',
    ],
  },
]

export const CASE_STUDIES = [
  {
    client: 'Angi',
    slug: 'angi',
    emoji: '🏠',
    bgFrom: '#121e34',
    bgTo: '#0c1520',
    description:
      'Reached homeowners by producing helpful TikTok content starring vetted professionals, driving massive engagement.',
    tags: ['TikTok', 'Content Production'],
  },
  {
    client: 'Angostura',
    slug: 'angostura',
    emoji: '🍹',
    bgFrom: '#1c1a2e',
    bgTo: '#0f0f20',
    description:
      'Recipe for success? Global strategy, thumb-stopping content, unparalleled results. Shaken, not stirred.',
    tags: ['Global Strategy', 'Content'],
  },
  {
    client: 'Bear Paw',
    slug: 'bear-paw',
    emoji: '🐻',
    bgFrom: '#1e1a14',
    bgTo: '#140f0a',
    description:
      'Expert promotion advertising and targeting: the secret to minimum ad spend and maximum results.',
    tags: ['Paid Ads', 'ROI'],
  },
  {
    client: 'Carnival',
    slug: 'carnival',
    emoji: '🎡',
    bgFrom: '#121e1e',
    bgTo: '#0a1414',
    description:
      'We brought FUN to the Carnival voice on social media through community management and viral content.',
    tags: ['Community', 'Brand Voice'],
  },
  {
    client: 'Mellow',
    slug: 'mellow',
    emoji: '🧘',
    bgFrom: '#1e1a12',
    bgTo: '#14100a',
    description:
      'Developed a paid ad strategy for the Mellow mindfulness app featuring eye-catching creatives that convert.',
    tags: ['Paid Social', 'App Marketing'],
  },
  {
    client: 'Cell Coverage',
    slug: 'cell-coverage',
    emoji: '📡',
    bgFrom: '#1a1228',
    bgTo: '#110d1e',
    description:
      'Generated high traffic and engagement numbers while steering clear of dead zones in their campaign.',
    tags: ['Engagement', 'Traffic'],
  },
  {
    client: 'Conexpo',
    slug: 'conexpo',
    emoji: '🏗️',
    bgFrom: '#1a2212',
    bgTo: '#101608',
    description:
      'Leveraged past data to craft a fire posting schedule for this construction trade show, exceeding all targets.',
    tags: ['B2B', 'Events'],
  },
  {
    client: 'First Trade',
    slug: 'first-trade',
    emoji: '📈',
    bgFrom: '#1e1214',
    bgTo: '#14080a',
    description:
      'Took this leading online brokerage from a bear to a bull market in engagement and website traffic.',
    tags: ['Fintech', 'Engagement'],
  },
]

export const TESTIMONIALS = [
  {
    stars: 5,
    quote:
      "So far we've seen INSANE growth across all of our sites and platforms. Up to +3000% impressions, +3700% engagements, and +1,400% audience growth at one of our sites! Our project manager was fantastic — very timely, professional, always available to meet our needs. I love MAXIMEDIA's custom approach to work — they are dedicated to creating custom solutions.",
    name: 'Amanda Hammond',
    company: 'National Park Service',
    avatar: 'A',
    avatarStyle: { background: 'linear-gradient(135deg, #04D361, #00c853)', color: '#000' },
    featured: true,
  },
  {
    stars: 5,
    quote:
      "MAXIMEDIA's project management is great. We have a platform where we share all ideas and they're prompt and responsive. Everything is highly organized. MAXIMEDIA has been organized — they schedule things ahead, which makes projects a lot less stressful for me.",
    name: 'Julia Grupa',
    company: 'Fras-le',
    avatar: 'J',
    avatarStyle: { background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: '#fff' },
    featured: false,
  },
  {
    stars: 5,
    quote:
      "We've seen significant growth on our social channels. Our Instagram followers went from 4,000 to 11,000. MAXIMEDIA launched our LinkedIn page with almost 6,000 followers. We won an award from the Construction Media Alliance — Best Social Media of the year.",
    name: 'Jordanne Waldschmidt',
    company: 'Association of Equipment Manufacturers',
    avatar: 'J',
    avatarStyle: { background: 'linear-gradient(135deg, #a855f7, #7c3aed)', color: '#fff' },
    featured: false,
  },
  {
    stars: 5,
    quote:
      'MAXIMEDIA has helped push our videos to the most recommended. They have offered a lot more than what we asked for, thanks to their high level of understanding and coordination. Excellent results all around.',
    name: 'Claudia Gebhardt',
    company: 'Inverness Dermatology',
    avatar: 'C',
    avatarStyle: { background: 'linear-gradient(135deg, #f97316, #c2410c)', color: '#fff' },
    featured: false,
  },
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Discovery & Strategy Development',
    description:
      'We dive deep into your brand, goals, and audience to build a custom roadmap perfectly aligned with your business objectives.',
  },
  {
    step: 2,
    title: 'Content Creation & Campaign Setup',
    description:
      'Our creative team produces platform-optimized content while strategists set up targeted campaigns for maximum impact.',
  },
  {
    step: 3,
    title: 'Execution & Community Management',
    description:
      'We publish, monitor, and engage daily — building genuine relationships between your brand and its community.',
  },
  {
    step: 4,
    title: 'Performance Monitoring & Optimization',
    description:
      'Data drives every decision. We continuously analyze and optimize to improve your ROI month over month.',
  },
]

export const BLOG_POSTS = [
  {
    slug: 'canva-alternatives',
    title: '11 Canva Alternatives | Design Your Social Media Content',
    excerpt:
      "When it comes to Canva alternatives, there are plenty to choose from. We break down the best options for your brand's creative needs...",
    tag: 'Design Tools',
    emoji: '🎨',
    readTime: '8 min read',
    date: 'Feb 10, 2025',
  },
  {
    slug: 'facebook-instant-experience-ads',
    title: 'Facebook Instant Experience Ads: A Guide to Increase Engagement',
    excerpt:
      "If you're looking to rapidly increase your Facebook ad engagement, it might be time to start with Instant Experience ads...",
    tag: 'Facebook Ads',
    emoji: '📘',
    readTime: '6 min read',
    date: 'Jan 28, 2025',
  },
  {
    slug: 'topics-to-attract-students',
    title: '5 Topics to Attract Students on Social Media',
    excerpt:
      "Students have so many options when choosing where to attend college. Here's how to reach them effectively on social media...",
    tag: 'Higher Education',
    emoji: '🎓',
    readTime: '5 min read',
    date: 'Jan 15, 2025',
  },
  {
    slug: 'social-media-marketing-for-gyms',
    title: 'Mastering Social Media Marketing for Gyms: A Comprehensive Guide',
    excerpt:
      'How are YOU connecting with your current gym membership holders and target audience on social media today?',
    tag: 'Fitness Industry',
    emoji: '💪',
    readTime: '10 min read',
    date: 'Dec 30, 2024',
  },
  {
    slug: 'instagram-interactive-stories-ads',
    title: 'How Interactive Instagram Stories Ads Can Help Grow Your Business',
    excerpt:
      'More than 500 million Instagram accounts use stories every day. Learn how to capitalize on this massive opportunity...',
    tag: 'Instagram',
    emoji: '📸',
    readTime: '7 min read',
    date: 'Dec 18, 2024',
  },
]

export const PARTNERS = [
  { label: 'Google Partner', icon: '🤝' },
  { label: 'TikTok Shop Partner', icon: '🎵' },
  { label: 'TikTok Marketing Partner', icon: '📱' },
  { label: 'Meta Business Partner', icon: '💼' },
  { label: 'Reddit Marketing Partner', icon: '💬' },
  { label: 'LinkedIn Marketing Partner', icon: '🔗' },
  { label: 'Pinterest Partner', icon: '📌' },
]

export const BRANDS = [
  'SAMSUNG', 'MARRIOTT', 'CARNIVAL', 'NIKON', 'ASUS', 'ANGI',
  'NETAPP', 'SNAP-ON', 'PACCAR', 'NEXANS', 'FIRSTRADE', 'SHOKZ',
]

export const TEAM_MEMBERS = [
  {
    name: 'Alex Morgan',
    role: 'CEO & Founder',
    avatar: 'A',
    bio: "With 15+ years of social media expertise, Alex leads MAXIMEDIA's vision of turning social into measurable business results.",
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Strategy',
    avatar: 'S',
    bio: 'Sarah architects data-driven social strategies that consistently exceed client KPIs across every major platform.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Creative Director',
    avatar: 'M',
    bio: 'Marcus leads our creative team in producing scroll-stopping content that resonates and converts.',
  },
  {
    name: 'Priya Patel',
    role: 'VP of Paid Social',
    avatar: 'P',
    bio: 'Priya manages $50M+ in annual ad spend, optimizing every dollar for maximum ROAS and client ROI.',
  },
  {
    name: 'David Kim',
    role: 'Head of Analytics',
    avatar: 'D',
    bio: "David translates complex social data into actionable insights that power our clients' strategic decisions.",
  },
  {
    name: 'Emma Williams',
    role: 'Community Director',
    avatar: 'E',
    bio: 'Emma builds authentic brand communities, fostering real engagement that drives long-term loyalty.',
  },
]
