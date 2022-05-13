const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@components': toPath('./src/components'),
          '@theme': toPath('./src/theme'),
          '@src': toPath('./src'),
          '@root': toPath('*'),
        },
      },
    };
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(js,jsx|ts|tsx)'],
};
