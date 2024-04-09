const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    colors: {
      
      'JonesCo-Blue': {
        '50': '#ecfbff',
        '100': '#d4f4ff',
        '200': '#b2eeff',
        '300': '#7de7ff',
        '400': '#40d5ff',
        '500': '#14b7ff',
        '600': '#0098ff',
        '700': '#0080ff',
        '800': '#0066cc',
        '900': '#0857a0',
        '950': '#0a3561',
    },
    
      
      'JonesCo-Green': {
        '50': '#f0fdf1',
        '100': '#dcfcdf',
        '200': '#bbf7c1',
        '300': '#85f091',
        '400': '#49df5a',
        '500': '#23d237',
        '600': '#15a426',
        '700': '#148121',
        '800': '#166520',
        '900': '#14531d',
        '950': '#052e0c',
    },
    
      
      'JC-tan': {
        50: '#fff9eb',
        100: '#ffecbc',
        200: '#ffdd88',
        300: '#ffc64a',
        400: '#ffae20',
        500: '#f98b07',
        600: '#dd6502',
        700: '#b74406',
        800: '#94340c',
        900: '#7a2b0d',
        950: '#461402',
      },
      'JC-nero': {
        50: '#faffe6',
        100: '#efffbd',
        200: '#e4ff7e',
        300: '#deff35',
        400: '#e2ff00',
        500: '#fdff00',
        600: '#deca00',
        700: '#b09300',
        800: '#917302',
        900: '#7a5c09',
        950: '#1a1200',
      },
      'JonesCo-Green': {
        50: '#fbf9eb',
        100: '#f7f1ca',
        200: '#f0e398',
        300: '#e8cc5c',
        400: '#dfb630',
        500: '#d3a223',
        600: '#b37d1b',
        700: '#8f5b19',
        800: '#77491c',
        900: '#663d1d',
        950: '#3b1f0d',
      },
      'white': '#ffffff',
      'black': '#000000',
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
        jc: ['League Gothic', ...defaultTheme.fontFamily.sans]
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
