module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // prettier-ignore
    screens: {
      'sm': "368px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'poppins': ['Poppins']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#A256E7',
      textColor: '#2F4858'
    },
  },
  plugins: [],
};
