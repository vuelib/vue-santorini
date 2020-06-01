module.exports = {
  presets: ['@babel/env', 'babel-preset-typescript-vue', '@vue/cli-plugin-babel/preset'],
  plugins: [
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
};
