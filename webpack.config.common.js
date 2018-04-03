const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            // {
            //     test: /\.css$/,
            //     use: [{ loader: 'raw-loader' }]
            // },
            {
                test:/\.(s*)css$/,
                // use: ExtractTextPlugin.extract({
                //     fallback:'style-loader',
                use: ['to-string-loader', 'style-loader', 'raw-loader', 'sass-loader']
                // })
            }
        ],
        exprContextCritical: false

    },

    // plugins: [
    //     new ExtractTextPlugin({filename:'bundle.css'}),
    // ]
};
