const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(filename) {
    return path.join(__dirname, 'src', filename)
}

module.exports = {
    mode: 'development',
    entry: resolve('index.js'),
    output: {
        filename: '[name].js',
        path: resolve('../dist'),
        publicPath: '',
        chunkFilename: '[id].js?[chunkhash]'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: resolve('../index.html'),
          filename: 'index.html'  
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        port: 3000
    }
}