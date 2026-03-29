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
          cyan: '#00f0ff',
          magenta: '#ff00aa',
          violet: '#8a2be2',
        },
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a25',
          600: '#222230',
        },
        violet: '#8a2be2',
        darkGray: '#1c1c1e',
        lightGray: '#d3d3d3',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00f0ff, 0 0 20px rgba(0, 240, 255, 0.3)',
        'neon-violet': '0 0 5px #8a2be2, 0 0 20px rgba(138, 43, 226, 0.3)',
      },
    },
  },
  plugins: [],
}
