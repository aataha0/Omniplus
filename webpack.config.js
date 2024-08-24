const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

module.exports = {
    context: ROOT,
    devtool: 'inline-source-map',
    entry: './scripts/main.ts',

    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [
            /****************
            * PRE-LOADERS
            *****************/
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },

            /****************
            * LOADERS
            *****************/
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // CSS Loader
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: { injectType: "singletonStyleTag" },
                    },
                    "css-loader",
                ]
            }
        ]
    },

    optimization: {
        minimize: true
    },

    devtool: 'cheap-module-source-map',
    devServer: {}
};
