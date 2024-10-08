import webpack from 'webpack';
import path from 'path';
import { path as appRootPath } from 'app-root-path';

import { config as dotEnvConfig } from 'dotenv';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import Dotenv from 'dotenv-webpack';

//--------------- Config ---------------//
// Add dotenv config
dotEnvConfig({ path: path.join(appRootPath, './config/.env') });

//--------------- Plugins ---------------//
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

console.log(`process.env['NODE_ENV']:`, process.env['NODE_ENV']);
console.log(`process.env:`, process.env);

/**
 * Root Webpack configuration object.
 */
const config: webpack.Configuration = {
    entry: path.resolve(__dirname, `../app/client/app.tsx`),

    context: path.resolve(__dirname, '../app/client'),

    output: {
        path: path.resolve(__dirname, `../build`),
        pathinfo: false,
        publicPath: `/`,
        filename: `index.js`,
    },

    mode: process.env['NODE_ENV'] as any,

    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['.ts', '.tsx', '.json', '.js', '.jsx'],
    },

    /**
     * Handlers for different types of files.
     */
    module: {
        rules: [
            // Handle text files
            { test: /\.txt$/, use: 'raw-loader' },

            // Compile Typescript
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            configFile: path.resolve(__dirname, '../tsconfig.json'),
                        },
                    },
                ],
            },

            // Handle loading CSS files
            {
                test: /\.css?$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: `css-loader`,
                        options: {
                            modules: {
                                localIdentName: `[path][name]__[local]--[hash:base64:5]`,
                                mode: 'icss',
                                auto: true, // Treat all files as CSS modules by default
                                /**
                                 * Allow css-loader to export names from global class or id, so
                                 * you can use that as local name.
                                 */
                                exportGlobals: true,
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, '../postcss.config.js'),
                            },
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
        new MiniCssExtractPlugin({
            filename: 'styles/index.css',
        }),

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
            output: path.resolve(__dirname, `../build/index.html`),
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
