const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
    return {
        entry:{
            main:"./index.js", //this is where the webpack will start building the dependency graph
        },
        plugins:[
           
            new HtmlWebpackPlugin({
                title:'HackerNews Clone',
                template:'./index.html',
            }),
        ],
        module:{
            rules :[
                {
                    test:/\.css$/,
                    use:['css-loader'],
                    sideEffects:true,
                },
                {
                    test:/\.js$/,
                    exclude:'/node-modules/',
                    use:{
                      loader: 'babel-loader',
                    }
                },
            ]
        },
        optimization:{
            splitChunks:{
                cacheGroups:{
                    vendor:{
                        chunks:'all',
                        test:/node_modules/,
                        name:'vendor'
                    }
                }
            }
        }
    }
}