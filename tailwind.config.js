module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'hover-hover': { raw: '(hover: hover)' },
      },
      keyframes: {
        reveal: {
          '0%': {
            opacity: 0,
            transform: 'rotateY(90deg)',
            filter: 'blur(10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'rotateY(0deg)',
            filter: 'blur(0)',
          },
        },
      },
      animation: {
        reveal: 'reveal 1s linear both',
      },
    },
  },
  plugins: [],
};
