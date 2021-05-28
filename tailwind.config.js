module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        pokedex: {
          'yellow-1': 'rgba(236, 165, 57, 1)',
          'red-2': 'rgba(192, 14, 32, 1)',
          'red-1': 'rgba(242, 37, 57, 1)',
          'gray-3': 'rgba(53, 53, 53, 1)',
          'gray-2': 'rgba(94, 94, 94, 1)',
          'gray-1': 'rgba(191, 191, 191, 1)',
          'white-3': 'rgba(232, 232, 232, 1)',
          'white-2': 'rgba(245, 245, 245, 1)',
          'white-1': 'rgba(249, 249, 249, 1)',
        },
      },
      textColor: {
        pokedex: {
          'yellow-1': 'rgba(236, 165, 57, 1)',
          'red-2': 'rgba(192, 14, 32, 1)',
          'red-1': 'rgba(242, 37, 57, 1)',
          'gray-3': 'rgba(53, 53, 53, 1)',
          'gray-2': 'rgba(94, 94, 94, 1)',
          'gray-1': 'rgba(94, 94, 94, 1)',
          'white-3': 'rgba(232, 232, 232, 1)',
          'white-2': 'rgba(245, 245, 245, 1)',
          'white-1': 'rgba(249, 249, 249, 1)',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
