var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: '../../Cdn/portal/scripts',
        filename: 'linn.portal.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]*$/,
            loaders: ['babel'],
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
