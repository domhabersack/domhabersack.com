const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './_courses/**/*.mdx?',
    './pages/**/*.js',
    './src/**/*.js',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
    fontFamily: {
      mono: [
        'Source Code Pro',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
      display: ['dark'],
      opacity: ['disabled'],
      textColor: ['disabled', 'visited'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
