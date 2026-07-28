/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F2F8FC',
          100: '#E2EFF8',
          200: '#C2DCEE',
          300: '#95C2E0',
          400: '#5EA2CD',
          500: '#3785BA',
          600: '#26699B',
          700: '#1F547C',
          800: '#1D4765',
          900: '#1B3C54',
        },
        accent: {
          100: '#FDF1E7',
          300: '#F5C79E',
          500: '#E39A63',
          700: '#C87B45',
        },
        ink: '#12293A',
        muted: '#5C7488',
        surface: '#FAFCFD',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(18, 41, 58, 0.12)',
        lift: '0 18px 40px -12px rgba(18, 41, 58, 0.20)',
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
}
