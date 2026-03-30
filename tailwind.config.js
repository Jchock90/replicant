const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        neon: {
          pink: '#E87ACC',
          cyan: '#00f0ff',
        },
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a25',
          600: '#222230',
        },
        pink: '#E87ACC',
        darkGray: '#1c1c1e',
        lightGray: '#d3d3d3',
      },
      boxShadow: {
        'neon': '0 0 3px rgba(232, 122, 204, 0.1), 0 0 8px rgba(232, 122, 204, 0.06)',
        'neon-pink': '0 0 3px rgba(232, 122, 204, 0.1), 0 0 8px rgba(232, 122, 204, 0.06)',
      },
    },
  },
  plugins: [],
}
