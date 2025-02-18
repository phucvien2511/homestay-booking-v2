import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#140F34',
        foreground: 'var(--foreground)',
        primary: {
          start: '#3DBDB7',
          end: '#6B42D8',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
} satisfies Config;
