// Webpack uses this to work with directories
const path = require('path');
const { library } = require('webpack');

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './bin/Index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this filenpm
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
    library: 'EntryPoint'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules')
    ]
  },

  target: 'node',

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development
  mode: 'development'
};
