const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/client/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve('./src/client/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}