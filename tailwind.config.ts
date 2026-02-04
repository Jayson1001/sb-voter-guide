import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm cream backgrounds
        cream: {
          50: '#FEFDFB',
          100: '#FDF9F3',
          200: '#FAF3E8',
          300: '#F5EBDA',
        },
        // Soft sage greens
        sage: {
          50: '#F4F7F4',
          100: '#E8EFE8',
          200: '#D1DFD1',
          300: '#A8C5A8',
          400: '#7BAA7B',
          500: '#5A8A5A',
          600: '#4A7A4A',
          700: '#3D663D',
          800: '#335533',
          900: '#294429',
        },
        // Warm terracotta accent
        terracotta: {
          50: '#FEF6F3',
          100: '#FDEBE4',
          200: '#FAD4C7',
          300: '#F5B8A3',
          400: '#E8927A',
          500: '#D97856',
          600: '#C45D3A',
          700: '#A34A2E',
          800: '#853D26',
          900: '#6E3321',
        },
        // Warm neutrals
        warmgray: {
          50: '#FAF9F7',
          100: '#F3F1ED',
          200: '#E8E4DD',
          300: '#D5CFC4',
          400: '#B5ADA0',
          500: '#958B7B',
          600: '#7A7064',
          700: '#635B51',
          800: '#524B43',
          900: '#3D3832',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Quicksand', 'sans-serif'],
        body: ['var(--font-body)', 'Nunito', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 4px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};
export default config;
