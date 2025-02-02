const path = require('path');

module.exports = {
  entry: './docs/assets/js/auth.js', // Path to your main auth.js file
  output: {
    filename: 'auth.bundle.js', // Output filename
    path: path.resolve(__dirname, 'docs/assets/js'), // Output directory
  },
  mode: 'production', // Use "development" for debugging
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel loader for .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Use Babel preset for modern JS
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // Resolve .js extensions
  },
};
