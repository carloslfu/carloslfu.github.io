const isDev = process.env.NODE_ENV !== 'production';
// const envPath = isDev ? './.env-dev' : './.env'
// require('dotenv').config({ path: envPath })
// const Dotenv = require('dotenv-webpack');
const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

module.exports = withTypescript(
  withCSS({
    target: 'server',
    webpack: (config, options) => {
      config.plugins = config.plugins || [];
      config.plugins = [
        ...config.plugins,
        // new Dotenv({
        //   path: path.join(__dirname, envPath),
        //   systemvars: true,
        // }),
      ];
      config.node = {
        fs: 'empty',
      };
      return config;
    },
  })
);
