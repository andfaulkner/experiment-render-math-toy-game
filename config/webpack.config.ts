import webpack from "webpack";
import path from "path";

import Dotenv from "dotenv-webpack";

//--------------- Plugins ---------------//
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

/**
 * Root Webpack configuration object.
 */
const config: webpack.Configuration = {
  entry: path.resolve(__dirname, `../app/client/app.tsx`),

  context: path.resolve(__dirname, '../app/client'),

  output: {
    path: path.resolve(__dirname, `../public`),
    pathinfo: false,
    publicPath: `/`,
    filename: `index.js`,
  },

  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['.ts', '.tsx', '.json', '.js', '.jsx']
  },

  /**
   * Handlers for different types of files.
   */
  module: {
    rules: [
      // Handle text files
      { test: /\.txt$/, use: "raw-loader" },

      // Compile Typescript
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, "../tsconfig.json"),
            },
          },
        ],
      },

      // Handle loading CSS files
      {
        test: /\.css?$/,
        use: [
          "style-loader",
          {
            loader: `css-loader`,
            options: {
              modules: {
                localIdentName: `[path][name]__[local]--[hash:base64:5]`,
                mode: "icss",
                /**
                 * Allow css-loader to export names from global class or id, so
                 * you can use that as local name.
                 */
                exportGlobals: true,
              },
              sourceMap: true,
            },
          },
        ],
      },

      // Handle image and font files
      {
        test: /\.(jpe?g|(gif)|(png)|(svg)|(bmp)|(tiff)|(ico)|(woff)|(woff2)|(eot)|(ttf)|(otf))$/,
        use: `file-loader`,
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
      defaults: path.resolve(__dirname, './.env.defaults'),
      safe: path.resolve(__dirname, './.env.defaults'),
    }),

    /**
     * Check for Typescript errors on a separate thread (for performance).
     */
    new ForkTsCheckerWebpackPlugin(),

    /**
     * Build a root HTML file.
     */
    new HtmlWebpackPlugin({
      output: path.resolve(__dirname, `../public/index.html`),
      templateContent: ({ htmlWebpackPlugin }) => `
        <html>
          <head>
            <title>Payment component displayer</title>
            ${htmlWebpackPlugin.tags.headTags}
          </head>
          <body>
            <div id="root"></div>
            ${htmlWebpackPlugin.tags.bodyTags}
          </body>
        </html>
      `,
    }),
  ],
};

export default config;
