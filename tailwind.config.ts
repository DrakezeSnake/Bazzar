import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sand: {
          DEFAULT: '#F3EADB',
          100: '#ECE0CC',
          200: '#E3D4B8',
        },
        paper: '#FBF6EC',
        clay: {
          DEFAULT: '#C97A50',
          dark: '#A85F3C',
        },
        teal: {
          DEFAULT: '#1F4A47',
          dark: '#133532',
        },
        gold: '#C9A24A',
        ink: {
          DEFAULT: '#2A2520',
          light: '#4A4139',
        },
        muted: '#8A7F72',
        line: 'rgba(42, 37, 32, 0.12)',
        line2: 'rgba(42, 37, 32, 0.06)',
        success: '#4A7C59',
        danger: '#A8463A',
      },
      fontFamily: {
        display: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        'arabic-display': ['Amiri', 'Noto Naskh Arabic', 'serif'],
        'arabic-body': ['Readex Pro', 'Tajawal', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        base: '10px',
        lg: '18px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(42,37,32,0.06), 0 2px 8px rgba(42,37,32,0.04)',
        base: '0 2px 6px rgba(42,37,32,0.06), 0 10px 32px rgba(42,37,32,0.08)',
        lg: '0 8px 24px rgba(42,37,32,0.1), 0 32px 80px rgba(42,37,32,0.12)',
      },
      spacing: {
        '1px': '1px',
      },
    },
  },
  plugins: [],
};

export default config;
