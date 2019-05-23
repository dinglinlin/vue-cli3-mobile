module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 50,
      propWhiteList: [],
      minPixelValue: 2
    }
  }
}
