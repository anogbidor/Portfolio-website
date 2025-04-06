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
        'custom-light-soft-green': '#d4f3d9',
        'custom-green': '#1f4238',
        'custom-link': '#1f4238',
      },
      backgroundImage: {
        'custom-green': 'linear-gradient(135deg, #546E51, #394C36, #1C261B)',
      },
      keyframes: {
        textShine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
      },
      animation: {
        'text-shine': 'textShine 3s linear infinite',
        float: 'float 8s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out 2s infinite',
      },
    },
  },
  plugins: [],
}
