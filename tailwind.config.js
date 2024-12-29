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
      sm: "320px",
      md: "480px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1200px",
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
        primaryPink: '#DDB7B9', // Soft pink
        primaryBeige: '#F2EDE8', // Beige
        accentGold: '#F4C95D',   // Gold
        accentTeal: '#82C4C3',   
        neutralGray: '#333333',  // Charcoal Gray
        backgroundGray: '#F0F0F0', // Light gray for backgrounds
        white: '#FFFFFF',        // White for text or highlights
        softBlush: '#F8D7DA',    // Light pink for subtle highlights
        mutedCoral: '#F5A19C',   // Warm coral
        sageGreen: '#BFCBA8',    // Organic green tone
      },
    },
  },
  plugins: [],
}
