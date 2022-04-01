module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // prettier-ignore
      keyframes: {
        textBarKeyFrames: {
          '0%': {
            width: "0%",
            left: 0,
          },

          '50%': {
            width: "100%",
            left: 0,
          },

          '100%': {
            width: "0%",
            left: "100%",
          },
        },

        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      },
      animation: {
        beforetextBar:
          "textBarKeyFrames 0.5s cubic-bezier(.74, .06, .4, .92) forwards",
        aftertextBar:
          "textBarKeyFrames 0.5s cubic-bezier(.74, .06, .4, .92) 0.25s forwards",
        fadeIn: "fadeIn 1s 0.5s forwards",
      },
    },
    // prettier-ignore
    screens: {
      'sm': "368px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      poppins: ["Poppins"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bgColor: "#fff",
      bgSecondary: "#FCF7FF",
      primary: "#6C63FF",
      primaryDark: "#3c378a",
      secondary: "#B3A7DD",
      darkBlack: "#050505",
      black: "#2F4858",
      white: "#ffffff",
    },
  },
  plugins: [],
};
