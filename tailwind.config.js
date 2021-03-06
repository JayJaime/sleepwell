module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-blue": "#5868FA",
      "darkest-blue": "#262548",
      white: "#FFFFFF",
      "selected-blue": "#ECF2FF",
      "light-grey-blue": "#F5F8FF",
      "light-grey": "#F2F4F7",
      "light-grey-border": "#D0D5DD",
      "light-blue": "#C9DBFE",
      dark: "#27365A",
      "dark-grey": "#40517B",
      "primary-blue-hover": "#4D5DED",
      "dark-blue": "#2B3ABD",
    },
    backgroundImage: {
      "hero-pattern": "url('/public/assets/heroBg.svg')",
    },
    screens: {
      // Screen size change for video container size
      "video-xs": "320px",
      "video-android": "360px",
      "video-iphone": "374px",
      "video-sm": "420px",
      "video-md": "541px",
      "video-lg": "680px",
      // Screen sizes
      sm: "640px",
      md: "768px",
      "video-semi": "861px",
      lg: "1024px",
      desktop: "1280px",
      xl: "1290px",
      // so hero background image transitions well between common screen sizes
      "2xl": "1536px",
      "3xl": "1800px",
    },
    extend: {},
  },
  plugins: [],
};
