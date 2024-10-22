/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-text': '#cfe9df',
        'custom-green': '#345150',
        'custom-light-green': '#e5fbf4',
      },
      // backgroundImage: {
      //   'custom-linear': '#345150',
      // },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
