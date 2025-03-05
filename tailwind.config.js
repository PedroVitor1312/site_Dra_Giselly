/** @type {import('tailwindcss').Config} */
export default {
  // Define quais arquivos o Tailwind deve processar
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Extensão do tema com cores personalizadas
      colors: {
        burgundy: {
          50: '#fdf2f2',   // Tom mais claro
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f98080',
          500: '#f05252',
          600: '#9a1b1b',  // Cor principal
          700: '#771d1d',
          800: '#641818',
          900: '#521414',  // Tom mais escuro
        },
      },
    },
  },
  plugins: [],
};