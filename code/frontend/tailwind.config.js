/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray1: '#656e83',
      white: '#ffffff',
      warning1: '#fe7d8b',
      green_1: '#217d47',
      blue_1: '#1a91f0',
      green_2: '#e7f4ed',
      text_1: '#1e2532',
      bg_1: '#eff2f9',
      bg_2: '#e7e9f9',
      purple: '#343ecc',
      purple2: '#7a82f5',
      gray_text: '#828ba2',
    },
    extend: {
      transitionProperty: {
        border_width: 'border-width',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      },
    },
  },
  plugins: [],
};
