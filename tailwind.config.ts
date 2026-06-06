import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        chess: {
          brand: '#0062ff',
          surface: '#111827',
          accent: '#f9a826',
          muted: '#6b7280'
        }
      },
      boxShadow: {
        card: '0 18px 60px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
