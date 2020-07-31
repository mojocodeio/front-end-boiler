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
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    plugins: [
        HtmlPluginConfig,
    ]
}