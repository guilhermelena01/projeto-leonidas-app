/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'
      },
      keyframes: {
        'shake': {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        }
      },
      colors: {
        "primary": "#73563D"
      },
      height: {
        "max": "884px",
      },
      fontFamily: {
        'ubuntu-medium': ['Ubuntu-Medium', 'sans-serif'],
        'ubuntu-light': ['Ubuntu-Light', 'sans-serif'],
        'ubuntu-regular': ['Ubuntu-Regular', 'sans-serif'],
        'ubuntu-bold': ['Ubuntu-Bold', 'sans-serif'],
      },
    },

  },
  plugins: [// ...
    require('@tailwindcss/forms')]
}

