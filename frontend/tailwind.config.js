/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Sora", "serif"]
    },
    screens: {
      sm: "640px", // Small screens (mobile)
      md: "768px", // Medium screens (tablets)
      lg: "1024px", // Large screens (desktops)
      xl: "1280px", // Extra-large screens
      "2xl": "1536px" // Ultra-wide screens
    },
    extend: {
      keyframes: {
        bounceRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        "bounce-right": "bounceRight 1s infinite",
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "31px",
        "2xl": "36px",
        "3xl": "48px",
        "4xl": "64px",
        "5xl": "72px",
        "6xl": "96px"
      },
      colors: {
        primaryCoffee: "#2E1F16",
        primaryBeige: "#FFF9F2",
        accentGold: "#F4C95D",
        neutralGray: "#292725",
        backgroundGray: "#F0F0F0",
        white: "#FFFFFF",
        softBlush: "#F8D7DA",
        darkGray: "#535353"
      }
    }
  },
  plugins: []
};
