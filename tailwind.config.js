module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sf_pro_regular: ["SF-Pro-Regular", "sans-serif"],
        sf_pro_medium: ["SF-Pro-Medium", "sans-serif"],
        sf_pro_semibold: ["SF-Pro-Semibold", "sans-serif"],
        sf_pro_display_bold: ["SF-Pro-Display-Bold", "sans-serif"],
      },
        screens: {
          '5xl': '2048px',
      },
        spacing: {
        '112': '28rem'
      },
    },
  },
  plugins: [],
}
