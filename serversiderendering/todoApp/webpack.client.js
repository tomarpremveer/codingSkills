const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode:'none',
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [
        new Dotenv(),
  ],
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
            },
        ]
    }
}