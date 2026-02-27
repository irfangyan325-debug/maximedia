
export const SITE = {
  name: 'MAXIMEDIA',
  tagline: '#1 Social Media Management Company & Marketing Agency',
  description: 'MAXIMEDIA is a results-driven social media marketing agency. Stop guessing, start growing. Partner with a social marketing agency focused on your bottom line.',
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
      { label: 'Social Media Strategy', href: '/services/social-media-strategy' },
      { label: 'Social Media Management', href: '/services/social-media-management' },
      { label: 'Community Management & Listening', href: '/services/community-management' },
      { label: 'Social Content Production', href: '/services/social-content-production' },
      { label: 'Paid Social Advertising', href: '/services/paid-social-advertising' },
      { label: 'Influencer Marketing', href: '/services/influencer-marketing' },
      { label: 'Social Selling', href: '/services/social-selling' },
      { label: 'Social Media Consulting', href: '/services/social-media-consulting' },
      { label: 'Outbound Engagement', href: '/services/outbound-engagement' },
      { label: 'Data Analysis & ROI Modeling', href: '/services/data-analysis-roi-modeling' },
    ],
  },
  { label: 'Studios', href: '/studios' },
  { label: 'Work', href: '/work' },
  {
    label: 'Blog',
    href: '/blog',
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'Resources', href: '/resources' },
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
    icon: '🗺️',
    title: 'Social Media Strategy & Consulting',
    href: '/services/social-media-strategy',
    points: [
      'Building Your Roadmap for Social Success',
      'Competitor Analysis & Audience Insights',
      'Platform Selection & Content Pillars',
    ],
  },
  {
    icon: '🎬',
    title: 'Creative Content Production',
    href: '/services/social-content-production',
    points: [
      'Engaging Visuals & Copy That Resonates',
      'Video Production, Graphics & Photography',
      'Tailored Content for Each Platform',
    ],
  },
  {
    icon: '💬',
    title: 'Social Media Management & Community',
    href: '/services/social-media-management',
    points: [
      'Consistent Posting & Brand Voice Management',
      'Proactive Community Building & Interaction',
      'Reputation Monitoring & Management',
    ],
  },
  {
    icon: '💰',
    title: 'Paid Social Advertising Campaigns',
    href: '/services/paid-social-advertising',
    points: [
      'Targeted Ad Campaigns for Leads & Sales',
      'Ad Creative Development & A/B Testing',
      'Budget Optimization & Performance Tracking',
    ],
  },
  {
    icon: '🌟',
    title: 'Influencer Marketing Programs',
    href: '/services/influencer-marketing',
    points: [
      'Connecting Your Brand with Authentic Voices',
      'Campaign Strategy & Influencer Vetting',
      'Performance Measurement & Reporting',
    ],
  },
  {
    icon: '🎯',
    title: 'Social Selling & Outbound Engagement',
    href: '/services/social-selling',
    points: [
      'Leveraging Social for Direct Sales & Lead Gen',
      'Prospecting and Outreach Strategies',
      'Maintaining Consistent Executive Leadership',
    ],
  },
]

export const SERVICES_FULL = [
  ...SERVICES,
  {
    icon: '📡',
    title: 'Community Management & Listening',
    href: '/services/community-management',
    points: [
      'Real-time Community Monitoring',
      'Crisis Management & Response',
      'Sentiment Analysis & Reporting',
    ],
  },
  {
    icon: '🔍',
    title: 'Social Media Consulting',
    href: '/services/social-media-consulting',
    points: [
      'Social Audits & Competitive Analysis',
      'Team Training & Workshops',
      'Strategy Reviews & Roadmaps',
    ],
  },
  {
    icon: '📬',
    title: 'Outbound Engagement',
    href: '/services/outbound-engagement',
    points: [
      'Proactive Brand Outreach',
      'Partnership & Collaboration Identification',
      'Engagement Campaign Management',
    ],
  },
  {
    icon: '📈',
    title: 'Data Analysis & ROI Modeling',
    href: '/services/data-analysis-roi-modeling',
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
    bg: 'from-[#121e34] to-[#0c1520]',
    description: 'Reached homeowners by producing helpful TikTok content starring vetted professionals, driving massive engagement.',
    tags: ['TikTok', 'Content Production'],
  },
  {
    client: 'Angostura',
    slug: 'angostura',
    emoji: '🍹',
    bg: 'from-[#1c1a2e] to-[#0f0f20]',
    description: 'Recipe for success? Global strategy, thumb-stopping content, unparalleled results. Shaken, not stirred.',
    tags: ['Global Strategy', 'Content'],
  },
  {
    client: 'Bear Paw',
    slug: 'bear-paw',
    emoji: '🐻',
    bg: 'from-[#1e1a14] to-[#140f0a]',
    description: 'Expert promotion advertising and targeting: the secret to minimum ad spend and maximum results.',
    tags: ['Paid Ads', 'ROI'],
  },
  {
    client: 'Carnival',
    slug: 'carnival',
    emoji: '🎡',
    bg: 'from-[#121e1e] to-[#0a1414]',
    description: 'We brought FUN to the Carnival voice on social media through community management and viral content creation.',
    tags: ['Community', 'Brand Voice'],
  },
  {
    client: 'Mellow',
    slug: 'mellow',
    emoji: '🧘',
    bg: 'from-[#1e1a12] to-[#14100a]',
    description: 'Developed a paid ad strategy for the Mellow mindfulness app, featuring eye-catching creatives that convert.',
    tags: ['Paid Social', 'App Marketing'],
  },
  {
    client: 'Cell Coverage',
    slug: 'cell-coverage',
    emoji: '📡',
    bg: 'from-[#1a1228] to-[#110d1e]',
    description: 'Generated high traffic and engagement numbers while steering clear of dead zones in their campaign.',
    tags: ['Engagement', 'Traffic'],
  },
  {
    client: 'Conexpo',
    slug: 'conexpo',
    emoji: '🏗️',
    bg: 'from-[#1a2212] to-[#101608]',
    description: 'Leveraged past data to craft a fire posting schedule for this construction trade show, exceeding all targets.',
    tags: ['B2B', 'Events'],
  },
  {
    client: 'First Trade',
    slug: 'first-trade',
    emoji: '📈',
    bg: 'from-[#1e1214] to-[#14080a]',
    description: 'Took this leading online brokerage from a bear to a bull market in engagement and website traffic.',
    tags: ['Fintech', 'Engagement'],
  },
]

export const TESTIMONIALS = [
  {
    stars: 5,
    quote: "So far we've seen INSANE growth across all of our sites and platforms. Up to +3000% impressions, +3700% engagements, and +1,400% audience growth at one of our sites! And we're just about halfway through our period of performance. Our project manager was fantastic — very timely, professional, always available to meet our needs. I love MAXIMEDIA's custom approach to work — they are dedicated to creating custom solutions.",
    name: 'Amanda Hammond',
    company: 'National Park Service',
    avatar: 'A',
    avatarBg: 'from-[#04D361] to-[#00c853]',
    featured: true,
  },
  {
    stars: 5,
    quote: "MAXIMEDIA's project management is great. We have a platform where we share all of our ideas and they're prompt and responsive. Everything is highly organized. In general, everything runs smoothly. MAXIMEDIA has been organized — they schedule things ahead, which makes the projects a lot less stressful.",
    name: 'Julia Grupa',
    company: 'Fras-le',
    avatar: 'J',
    avatarBg: 'from-blue-500 to-blue-700',
    featured: false,
  },
  {
    stars: 5,
    quote: "We've seen significant growth on our social media channels. Our Instagram followers went from 4,000 to 11,000. MAXIMEDIA launched our LinkedIn page and it already has just under 6,000 followers. We ended up winning an award from the Construction Media Alliance — Best Social Media of the year.",
    name: 'Jordanne Waldschmidt',
    company: 'Association of Equipment Manufacturers',
    avatar: 'J',
    avatarBg: 'from-purple-500 to-purple-700',
    featured: false,
  },
  {
    stars: 5,
    quote: 'MAXIMEDIA has helped push our videos to the most recommended. They have offered a lot more than what we asked for, thanks to their high level of understanding and coordination. Excellent results all around.',
    name: 'Claudia Gebhardt',
    company: 'Inverness Dermatology',
    avatar: 'C',
    avatarBg: 'from-orange-500 to-orange-700',
    featured: false,
  },
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Discovery & Strategy Development',
    description: 'We dive deep into your brand, goals, and audience to build a custom roadmap perfectly aligned with your business objectives.',
  },
  {
    step: 2,
    title: 'Content Creation & Campaign Setup',
    description: 'Our creative team produces platform-optimized content while strategists set up targeted campaigns for maximum impact.',
  },
  {
    step: 3,
    title: 'Execution & Community Management',
    description: 'We publish, monitor, and engage daily — building genuine relationships between your brand and its community.',
  },
  {
    step: 4,
    title: 'Performance Monitoring & Optimization',
    description: 'Data drives every decision. We continuously analyze and optimize to improve your ROI month over month.',
  },
]

export const BLOG_POSTS = [
  {
    slug: 'canva-alternatives',
    title: '11 Canva Alternatives | Design Your Social Media Content',
    excerpt: 'When it comes to Canva alternatives, there are plenty to choose from. We break down the best options for your brand\'s creative needs...',
    tag: 'Design Tools',
    emoji: '🎨',
    bg: 'thumb-1',
    readTime: '8 min read',
    date: 'Feb 10, 2025',
  },
  {
    slug: 'facebook-instant-experience-ads',
    title: 'Facebook Instant Experience Ads: A Guide to Increase Engagement',
    excerpt: "If you're looking to rapidly increase your Facebook ad engagement, it might be time to start with Instant Experience ads...",
    tag: 'Facebook Ads',
    emoji: '📘',
    bg: 'thumb-2',
    readTime: '6 min read',
    date: 'Jan 28, 2025',
  },
  {
    slug: 'topics-to-attract-students',
    title: '5 Topics to Attract Students on Social Media',
    excerpt: 'Students have so many options when choosing where to attend college. Here\'s how to reach them effectively on social media...',
    tag: 'Higher Education',
    emoji: '🎓',
    bg: 'thumb-3',
    readTime: '5 min read',
    date: 'Jan 15, 2025',
  },
  {
    slug: 'social-media-marketing-for-gyms',
    title: 'Mastering Social Media Marketing for Gyms: A Comprehensive Guide',
    excerpt: 'How are YOU connecting with your current gym membership holders and target audience on social media today?',
    tag: 'Fitness Industry',
    emoji: '💪',
    bg: 'thumb-4',
    readTime: '10 min read',
    date: 'Dec 30, 2024',
  },
  {
    slug: 'instagram-interactive-stories-ads',
    title: 'How Interactive Instagram Stories Ads Can Help Grow Your Business',
    excerpt: 'More than 500 million Instagram accounts are using stories every day. Learn how to capitalize on this massive opportunity...',
    tag: 'Instagram',
    emoji: '📸',
    bg: 'thumb-5',
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
  { name: 'Alex Morgan', role: 'CEO & Founder', avatar: 'A', bio: 'With 15+ years of social media expertise, Alex leads MAXIMEDIA\'s vision of turning social into measurable business results.' },
  { name: 'Sarah Chen', role: 'Head of Strategy', avatar: 'S', bio: 'Sarah architects data-driven social strategies that consistently exceed client KPIs across every major platform.' },
  { name: 'Marcus Johnson', role: 'Creative Director', avatar: 'M', bio: 'Marcus leads our creative team in producing scroll-stopping content that resonates and converts.' },
  { name: 'Priya Patel', role: 'VP of Paid Social', avatar: 'P', bio: 'Priya manages $50M+ in annual ad spend, optimizing every dollar for maximum ROAS and client ROI.' },
  { name: 'David Kim', role: 'Head of Analytics', avatar: 'D', bio: 'David translates complex social data into actionable insights that power our clients\' strategic decisions.' },
  { name: 'Emma Williams', role: 'Community Director', avatar: 'E', bio: 'Emma builds authentic brand communities, fostering real engagement that drives long-term loyalty.' },
]