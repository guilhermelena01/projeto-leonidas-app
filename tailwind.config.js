/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
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

