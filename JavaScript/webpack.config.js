module.exports = {
    entry: './src/app.js',
    output: {
        path: '/Users/sergio.zambrano/workspace/php/formacion/KataTemplate/JavaScript/dist/',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
