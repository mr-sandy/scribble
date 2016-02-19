var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        //path: '../../Cdn/portal/scripts',
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js[x]*$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
