const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    target: 'node',
    mode:'none',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/react',
                    ['@babel/env',{targets:{browsers:['last 2 versions']}}]
                ]
            }
            }
        ]
    }
}