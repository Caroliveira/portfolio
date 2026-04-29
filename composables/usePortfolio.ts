export const usePortfolio = () => {
  const bio = {
    name: 'Carolina Ribeiro Oliveira',
    title: 'Senior Software Engineer',
    yearsOfExperience: 6,
    philosophy: 'Software Engineer bridging Frontend precision with AI Engineering. Focused on building solutions that prioritize user experience and product value.'
  }

  const projects = [
    {
      id: 'linaolivetree',
      title: 'linaolivetree',
      tagline: 'Reflorastation through literature.',
      description: 'An online book store where every purchase contributes to global reforestation efforts. Built with architectural sustainability in mind.',
      tech: ['Nuxt', 'Directus', 'Stripe', 'Tailwind'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 'nudge',
      title: 'nudge',
      tagline: 'Effort-based productivity.',
      description: 'A task management app that prioritizes your flow based on your current energy levels (High, Med, Low).',
      tech: ['Vue 3', 'Pinia', 'PWA', 'IndexedDB'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ]

  const experience = [
    {
      year: '2016 - 2022',
      role: 'The Click',
      company: 'University',
      description: 'I stumbled into software engineering, as one does. During college, I built a website for my then-boyfriend’s project. He got a 98, I got a career, and eventually, a breakup. Worth it. That weekend something clicked. I was a student who hadn\'t yet found her direction, and suddenly there it was. From that point on, I threw myself into everything: elective classes, extracurriculars, and event organization. I was figuring it out, but at least now I knew which direction to figure it out in.',
      highlights: []
    },
    {
      year: '2019',
      role: 'Frontend Intern',
      company: 'Smarti9',
      description: 'It started at Smarti9, where I was thrown into the deep end almost immediately. The other front-end developer left right as I arrived, leaving me completely on my own. No handoff, no guidance. I became 100% self-taught out of necessity, and honestly, it set the tone for everything that came after.',
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
      description: 'At Biz, my first real job, I became the engineer I am today: someone who does whatever needs doing: Front-end, back-end, mobile, all of it. The highlight? I helped build Pix from the ground up. Brazil\'s ubiquitous instant payment system was just launching, and I was one of the people building it. I\'m incredibly proud of that.',
      highlights: []
    },
    {
      year: '2021 - 2024',
      role: 'Senior Frontend Engineer',
      company: 'Andela',
      description: 'Then Andela knocked on the door, and it felt like a dream. My first international opportunity. I was thriving and promoted, but layoffs started creeping in and I let fear get the better of me. I left, and I\'ll admit, I regret it. Looking for a fresh start, I landed at LettrLabs.',
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

  return {
    bio,
    projects,
    experience
  }
}
