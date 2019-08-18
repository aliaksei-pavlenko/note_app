const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './source/index.js',
    output: {
        path: `${__dirname}/destination`,
        filename: 'index.bundled.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './source/index.html'
        })
    ]
}