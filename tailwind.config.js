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
        'custom-light-green': '#e5fbf4',
      },
      backgroundImage: {
        'custom-green': 'linear-gradient(135deg, #546E51, #394C36, #1C261B)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
