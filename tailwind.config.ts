import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        paper: '#F9F7F2',
        'paper-base': '#EBE7DE',
        'paper-card': '#FAF8F5',
        'paper-highlight': '#FFFFFF',
        ink: '#121212',
        'ink-light': '#4A4A45',
        'moss-dark': '#2C3B24',
        'moss-light': '#5A6B4B',
        'terra-orange': '#D2691E',
        'terra-rust': '#B34D2E',
        'watercolor-blue': '#B3D9E6',
        'watercolor-rose': '#FADADD',
        'watercolor-ochre': '#E3B448',
      },
      fontFamily: {
        handwriting: ['"Caveat"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
