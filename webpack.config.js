const path = require( 'path' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const CopyPlugin = require( 'copy-webpack-plugin' );

module.exports = {
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.jsx'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve( __dirname, 'dist' ),
  },
  devServer: {
    port: 5000,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin( {
      template: './index.html'
    } ),
    new CleanWebpackPlugin(),
    new CopyPlugin( {
      patterns: [
        {
          // поменять на файл .ico
          from: path.resolve( __dirname, 'src/assets/imgs/img.svg' ),
          to: path.resolve( __dirname, 'dist/img.svg' )
        }
      ]
    } ),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|eot|woff2)$/,
        use: ['file-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}