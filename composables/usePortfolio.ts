export const usePortfolio = () => {
  const bio = {
    name: 'Carolina Ribeiro Oliveira',
    title: 'Senior Software Engineer',
    yearsOfExperience: 6,
    philosophy: 'Bridging the gap between technical precision and artistic expression.'
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
      year: '2024 - Present',
      role: 'Senior Software Engineer',
      company: 'Tech Innovators',
      description: 'Leading frontend architecture and mentoring junior developers.'
    },
    {
      year: '2021 - 2024',
      role: 'Software Engineer',
      company: 'Growth Stack',
      description: 'Developed scalable micro-frontends and design systems.'
    },
    {
      year: '2019 - 2021',
      role: 'Junior Developer',
      company: 'Digital Artisans',
      description: 'Full-stack development with a focus on UI/UX precision.'
    }
  ]

  return {
    bio,
    projects,
    experience
  }
}
