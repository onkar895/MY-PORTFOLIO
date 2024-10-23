/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich'
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100%)' }
        },
        slideFade: {
          '0%': { transform: 'translateX(-100%)', opacity: 0.2 },
          '25%': {opacity: 0.4},
          '50%': { opacity: 0.6 },
          '75%': { opacity: 0.8 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        }
      },

      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        slideFade: 'slideFade 5s ease-in-out'
      },
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        gray: {
          900: '#1a1a1a'
        }
      },
      backgroundImage: {
        site: "url('./src/assets/site-bg.jpg')",
        about: "url('./src/assets/about.png')",
        services: "url('./src/assets/services.png')"
      }
    }
  },
  plugins: []
}
