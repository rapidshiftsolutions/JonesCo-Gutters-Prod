module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
        './public/**/*.html',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
    cssnano: {
      preset: 'default',
    },
  },
}