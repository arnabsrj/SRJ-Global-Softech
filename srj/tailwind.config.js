// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        pulseShadow: "pulse 6s ease-in-out infinite",
        glowPulse: "glow 4s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.4" },
        },
        pulseShadow: {
          "0%, 100%": {
            boxShadow: "0 0 30px #38BDF8",
          },
          "50%": {
            boxShadow: "0 0 60px #0A49D9",
          },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px 4px rgba(56,189,248,0.5)" },
          "50%": { boxShadow: "0 0 35px 8px rgba(10,73,217,0.7)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  plugins: [require('tailwind-scrollbar-hide')],

};