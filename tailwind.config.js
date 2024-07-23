/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
       'custom-gradient-1': 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)',
        'custom-gradient-2': 'linear-gradient(90deg, rgba(255, 12, 241, 1) 0%, rgba(250, 0, 135, 1) 100%)',
        'custom-gradient-3': 'linear-gradient(90deg, rgba(20, 159, 255, 1) 0%, rgba(17, 122, 255, 1) 100%)',
      }
    },
  },
  plugins: [],
}
