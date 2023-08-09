const path = require('path');

module.exports = {
    target: 'node',
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
                    'react',
                    'stage-0',
                    ['env',{targets:{browsers:['last 2 versions']}}]
                ]
            }
            }
        ]
    }
}