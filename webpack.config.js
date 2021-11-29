const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[contenthash].bundle.js'
    },
    devServer: {
        port: 3000,
        watchFiles: path.join(__dirname, '/src'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    getCustomTransformers: () => ({before: [styledComponentsTransformer]})
                }
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
}