import path = require('path');
import VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // Needed for <script lang="ts"> to work in *.vue files; see https://github.com/vuejs/vue-loader/issues/109
              // appendTsSuffixTo: [/\.vue$/],
            },
          },
          {
            loader: 'tslint-loader',
            // Enabling the typeCheck option here causes builds to fail:
            // "Ensure that the files supplied to lint have a .ts, .tsx, .d.ts, .js or .jsx extension."
            // Commented out like this, the build runs, but all lines of *.vue files are linted, including
            // <template> and <script> blocks.
            // , options: {
            //     typeCheck: true
            // }
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'babel-loader',
          },
          esModule: true,
        },
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
