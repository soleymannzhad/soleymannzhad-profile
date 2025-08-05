/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
    
        colortheme1: '#18171d',
        colortheme2: '#ca0049',
      },
    
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.writing-mode-vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.writing-mode-vertical-lr': {
          writingMode: 'vertical-lr',
        },
        '.writing-mode-horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
      }
      addUtilities(newUtilities, ['responsive'])
    },
  ],
}
