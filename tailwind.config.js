const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * NOTE:
 * https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
 */

module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '1.5em': '1.5em',
      '2em': '2em',
      '4.5xl': '2.5rem',
      '18px': '18px',
      '25px': '25px',
      '30px': '30px',
      ...defaultTheme.fontSize,
    },

    borderWidth: {
      none: '0',
      1: '1px',
      3: '3px',
      ...defaultTheme.borderWidth,
    },
    maxWidth: {
      container: '82.5em',
      '500px': '500px',
      '400px': '400px',
    },
    borderRadius: {
      none: '0',
      '0.5em': '0.5em',
      '4px': '4px',
      '5px': '5px',
      '10px': '10px',
      '30px': '30px',
      header: '100% 0% 100% 0% / 0% 50% 50% 100%',
      half: '50%',
      ...defaultTheme.borderRadius,
    },
    boxShadow: {
      sm: 'rgba(0, 0, 0, 0.19) 0px 10px 20px,rgba(0, 0, 0, 0.23) 0px 6px 6px',
      none: 'none',
    },
    left: {
      logo: '-100',
      dp: '-100',
    },
    top: {
      logo: '-100',
      dp: '-100',
    },
    extend: {
      colors: {
        prod: '#00ebff',
        item: '#ec1c76',
        box: '#666',
        payments: '#ebebeb',
        demo: '#f4f4f4',
        link: '#551A8B',
        bgstart: '#3f2b96',
        bgend: '#a8c0ff',
      },
      height: {
        card: '30rem',
      },
      backgroundColor: {
        card: '#64B5F6',
        base: '#FFF',
      },
      boxShadow: ['active'],
      spacing: {
        '300px': '300px',
        '100px': '100px',
        '400px': '400px',
        '4px': '4px',
        '5px': '5px',
        '10px': '10px',
        '13px': '13px',
        '75px': '75px',
        '175px': '175px',
        ...defaultTheme.spacing,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
  prefix: 'tw-',
};
