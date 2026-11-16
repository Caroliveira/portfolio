export interface Project {
  id: string
  title: string
  logo: string
  tagline: string
  summary: string
  description: string
  tech: string[]
  features: string[]
  links: {
    demo: string
    github: string
  }
  status?: string
  category: string
  platforms: string
}

export interface Experience {
  year: string
  role: string
  company: string
  description: string
  highlights: string[]
}

export const usePortfolio = () => {
  const bio = {
    name: 'Carolina Ribeiro Oliveira',
    title: 'Software Engineer',
    philosophy: 'Software Engineer bridging frontend precision and AI engineering to build products that put people first.'
  }

  const projects: Project[] = [
    {
      id: 'nudge',
      title: 'Nudge',
      logo: '/assets/images/projects/nudge-logo.png',
      tagline: 'Sustainable micro-habits.',
      summary: 'A mobile-first PWA designed to turn small recurring actions into sustainable habits.',
      description: 'My daily tool for turning small recurring actions into sustainable habits. Built with a mobile-first approach, it works completely offline as a PWA and is distributed as a native Android app via TWA.',
      tech: ['React 19', 'Vite', 'Zustand', 'Tailwind', 'PWA'],
      features: [
        'Mobile-First Habit Tracking',
        'Trusted Web Activity (Android)',
        'Offline-First Support',
        'Internationalization (i18n)'
      ],
      links: {
        demo: 'https://nudge.linaoliveira.dev/',
        github: '#'
      },
      category: 'LifestyleApplication',
      platforms: 'Web, Android',
      status: 'Coming soon to Play Store'
    },
    {
      id: 'itinera',
      title: 'Itinera',
      logo: '/assets/images/projects/itinera-logo.svg',
      tagline: 'Trips planned around real travel times.',
      summary: 'A collaborative trip planner that turns a list of places into an optimized day-by-day itinerary.',
      description: 'Born from a 14-day trip to New York that I planned entirely by hand: amazing, but impossible to repeat for every trip. Itinera does that work for me. It plans each day around hotels, opening hours and real travel times, combining geo-clustering, a route solver and Gemini to optimize the order, and lets travel companions plan together through shared trips and QR invites.',
      tech: ['Next.js 16', 'React 19', 'DynamoDB', 'Gemini', 'Google Maps', 'Playwright'],
      features: [
        'Hybrid Itinerary Optimizer (Clustering + TSP + AI)',
        'Real Travel Times & Opening Hours',
        'Collaborative Trips with Roles & QR Invites',
        'Reservations, Notes & Attachments'
      ],
      links: {
        demo: 'https://itinerahub.app/',
        github: '#'
      },
      category: 'TravelApplication',
      platforms: 'Web',
      status: 'Interface in Portuguese'
    }
  ]

  const experience: Experience[] = [
    {
      year: '2016 - 2022',
      role: 'The Click',
      company: 'University',
      description: 'I stumbled into software engineering. During college, I built a website for my then-boyfriend’s project. He got a 98, I got a career, and eventually, a breakup. Worth it. That weekend something clicked. I was a student who hadn\'t yet found her direction, and suddenly there it was. From that point on, I threw myself into everything: elective classes, extracurriculars, and event organization. I was figuring it out, but at least now I knew which direction to figure it out in.',
      highlights: []
    },
    {
      year: '2019',
      role: 'Frontend Intern',
      company: 'Smarti9',
      description: 'My first job was at Smarti9, and I was on my own almost from day one. The other front-end developer left right as I arrived: no handoff, no guidance. I had to teach myself everything on the job, and honestly, it set the tone for everything that came after.',
      highlights: []
    },
    {
      year: '2020',
      role: 'Contractor',
      company: 'JazzSolutions',
      description: 'From there, a freelance opportunity came up through JazzSolutions, building an MVP for a logistics company. I delivered it, but the client took too long to decide whether to move forward. By the time they did, I had already signed with someone else, BizCapital.',
      highlights: []
    },
    {
      year: '2020 - 2021',
      role: 'Software Engineer',
      company: 'BizCapital',
      description: 'At Biz, where my career really began, I became the engineer I am today, someone who does whatever needs doing: front-end, back-end, mobile, all of it. The highlight? I built BizCapital\'s Pix integration from scratch, right as Brazil\'s now-ubiquitous instant payment system was launching. I\'m incredibly proud of that.',
      highlights: []
    },
    {
      year: '2021 - 2024',
      role: 'Senior Frontend Engineer',
      company: 'Andela',
      description: 'Then Andela knocked on the door, and it felt like a dream: my first international opportunity. I was thriving and even got promoted, but when layoffs started creeping in, I let fear get the better of me and left. I\'ll admit I regret it, and it taught me to make decisions from clarity, not fear. Looking for a fresh start, I landed at LettrLabs.',
      highlights: []
    },
    {
      year: '2024',
      role: 'Frontend Lead',
      company: 'LettrLabs',
      description: 'The product was enchanting: handwritten letters at scale. I was the only front-end engineer, working directly with the co-founder to shape the entire experience. It was intense, a true startup pace, and it taught me a lot about ownership and working under pressure. I left with a clearer sense of what kind of environment brings out my best work.',
      highlights: []
    },
    {
      year: '2025 - Present',
      role: 'AI Software Engineer',
      company: 'iFood',
      description: 'Coming out of that, I wanted the opposite: a large, structured company and stability. So I joined iFood as a front-end engineer. Except the project I landed on had no front-end to build. I recognized an opportunity to reinvent myself and pivoted into AI engineering: multi-agent systems, LangChain, MCP servers, and memory management. A whole new world.',
      highlights: []
    }
  ]

  const { public: { siteUrl } } = useRuntimeConfig()
  const personId = `${siteUrl}/#person`

  const personSchema = {
    '@type': 'Person',
    '@id': personId,
    name: bio.name,
    alternateName: 'Lina Oliveira',
    jobTitle: bio.title,
    description: bio.philosophy,
    url: `${siteUrl}/`,
    image: `${siteUrl}/logo.png`,
    worksFor: { '@type': 'Organization', name: 'iFood' },
    sameAs: [
      'https://github.com/Caroliveira',
      'https://www.linkedin.com/in/carolina-ribeiro-oliveira'
    ],
    knowsAbout: [
      'Frontend Engineering',
      'AI Engineering',
      'React',
      'TypeScript',
      'Next.js',
      'Nuxt',
      'Python',
      'Kotlin',
      'Multi-agent systems',
      'LangChain',
      'Model Context Protocol (MCP)'
    ]
  }

  return {
    bio,
    projects,
    experience,
    siteUrl,
    personId,
    personSchema
  }
}
