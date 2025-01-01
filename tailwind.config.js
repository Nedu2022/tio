/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      body: ["Lato", "sans-serif"],
      sac: ["Sacramento", "cursive"],
    },
    screens: {
        sm: "640px",  // Small screens (mobile)
        md: "768px",  // Medium screens (tablets)
        lg: "1024px", // Large screens (desktops)
        xl: "1280px", // Extra-large screens
        "2xl": "1536px", // Ultra-wide screens
      
    },
    extend: {
      keyframes: {
        bounceRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        'bounce-right': 'bounceRight 1s infinite',
      },
      fontSize: {
        xs: '14px',
        sm: '16px',
        md: '20px',
        lg: '24px',
        xl: '31px',
        '2xl': '36px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '72px',
        '6xl': '96px',
      },
      colors: {
        primaryPink: '#F5A19C', // Soft pink
        primaryBeige: '#F2EDE8', // Beige
        accentGold: '#F4C95D',   // Gold
        neutralGray: '#333333',  // Charcoal Gray
        backgroundGray: '#F0F0F0', // Light gray for backgrounds
        white: '#FFFFFF',        // White for text or highlights
        softBlush: '#F8D7DA',    // Light pink for subtle highlights
      },
    },
  },
  plugins: [],
}
