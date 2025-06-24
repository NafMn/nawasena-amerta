module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,html}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/public/assets/images/hero.png')",
      }
    },
  },
  plugins: [],
};
