const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

//process.env.NODE_ENV 
// stores the environment you are currently in
// use module dotenv to setup env variables
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  
if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

// configuration: exporting a function
module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  
  return {
    // playground to test out code
    entry: './src/app.js',
    
    // entry: './src/app.js',
    output: {
      // absolute path to where bundle.js is
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREABASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREABASE_AUTH_DOMAIN),
        'process.env.FIRABASE_DATABASE_URL': JSON.stringify(process.env.FIRABASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREABASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREABASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER)
      })
    ],
    devtool: isProduction ? "source-map" : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
};

