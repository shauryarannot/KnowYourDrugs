/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode with `.dark` class
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ['group-hover'], // 👈 enables group-hover display toggling
    },
  },
}
