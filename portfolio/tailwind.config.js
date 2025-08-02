/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f5ebf3',
          DEFAULT: '#683660',
          dark: '#a8579b',
        },
        accent: {
          light: '#eeddeb',
          DEFAULT: '#e0cade',
        },
        text: {
          primary: '#070306',
          secondary: '#333',
        }
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1.5s infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-up': 'scaleUp 0.5s ease-out',
        'rotate-slow': 'rotateSlow 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-5%)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      boxShadow: {
        'primary': '0 10px 30px rgba(104, 54, 96, 0.3)',
        'primary-hover': '0 15px 40px rgba(104, 54, 96, 0.5)',
        'glow': '0 0 20px rgba(168, 87, 155, 0.3)',
        'glow-lg': '0 0 40px rgba(168, 87, 155, 0.4)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'organic-hover': '60% 40% 40% 60% / 60% 30% 70% 40%',
      }
    },
  },
  plugins: [],
}

