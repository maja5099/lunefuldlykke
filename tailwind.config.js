module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('content/lunefuld-lykke-header.jpg')",
        'landingHero': "url('content/click/fog_video_lighter_no_logo.gif')",
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
