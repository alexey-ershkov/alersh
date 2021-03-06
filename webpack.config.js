const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { DefinePlugin } = require('webpack');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = (env) => {
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  console.log(envKeys);

  return {
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[contenthash].bundle.js',
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      watchFiles: path.join(__dirname, '/src'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],

      alias: {
        assets: path.resolve(__dirname, './src/assets'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
          },
        },
        {
          test: /\.s?[ca]ss$/i,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: [
            process.env.NODE_ENV ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          loader: 'file-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new MiniCssExtractPlugin({ filename: '[contenthash].min.css' }),
      new DefinePlugin(envKeys),
    ],
    optimization: {
      minimizer: [new TerserPlugin({ extractComments: false })],
    },
  };
};
