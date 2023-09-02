/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#232F61',
      'accent': '#BAE8D7',
      'accent-light': '#D2EBF6',
      'accent-medium': '#E1D7F2',
      'accent-medium-2': '#FDE6DD',
      'white': '#fff',
      'white-second': "#FAFAFA",
      'black': '#000'
    }, 
    fontFamily: {
      grotesque: ['Darker Grotesque'],
    },
  },
  plugins: [],
}

