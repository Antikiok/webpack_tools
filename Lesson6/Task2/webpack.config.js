module.exports = {
  entry: '/src/index.js',
  output: {
    filename: 'boundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/i,
        use: ['babel-loader'],
      },
    ],
  },
};
