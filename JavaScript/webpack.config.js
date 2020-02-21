var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    resolve: {
        extensions: [
            '.js',
            '.es',
            '.ts',
            '.jsx',
            '.html'
        ],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    entry: {
        app: './src/App.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist', 'kata.html'),
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(js|es)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(ts)$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    target: 'web',
    stats: {
        colors: true
    }
};
