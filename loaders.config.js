const path = require('path')

module.exports = {
    entry: './src/client.js',
    output: {
        filename: 'client.js',
        path: path.resolve('dist/loaders'),
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ],
        }],
    },
}