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
          violet: '#7B61FF',
          cyan: '#00f0ff',
        },
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a25',
          600: '#222230',
        },
        violet: '#7B61FF',
        darkGray: '#1c1c1e',
        lightGray: '#d3d3d3',
      },
      boxShadow: {
        'neon': '0 0 4px rgba(123, 97, 255, 0.2), 0 0 15px rgba(123, 97, 255, 0.12)',
        'neon-violet': '0 0 4px rgba(123, 97, 255, 0.2), 0 0 15px rgba(123, 97, 255, 0.12)',
      },
    },
  },
  plugins: [],
}
