const path = require('path');

module.exports = {
    entry: {
        leches: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
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
    resolve: {
        extensions: [
            '.js',
            '.es',
            '.ts',
            '.jsx'
        ],
        alias: {
            root: path.resolve(__dirname, 'src')
        }
    },
    stats: {
        colors: true
    }
};
