const path = require('path');

/** plugins */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** plugin configs */
const HtmlPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html'
});

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },{
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },{
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, //must match all of these files for using semantic-ui
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        HtmlPluginConfig,
    ]
}