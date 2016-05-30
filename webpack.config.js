var webpack = require('webpack');

var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './js/app.js'
    ],
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},            
        ]
    },
    plugins: [new webpack.NoErrorsPlugin()]
};

module.exports = config;