const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.js',
    './src/**/*.js',
    './node_modules/@yieldui/react/dist/**/*.js',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            '[class~="lead"]': {
              color: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.blue.500'),
            },
            blockquote: {
              color: theme('colors.gray.50'),
            },
            code: {
              color: theme('colors.gray.400'),
            },
            'a code': {
              color: theme('colors.blue.300'),
            },
            h2: {
              color: theme('colors.gray.50'),
            },
            h3: {
              color: theme('colors.gray.50'),
            },
            h4: {
              color: theme('colors.gray.50'),
            },
            'ol > li::before': {
              color: theme('colors.gray.400'),
            },
            strong: {
              color: theme('colors.gray.50'),
            },
          },
        },
      }),
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
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
