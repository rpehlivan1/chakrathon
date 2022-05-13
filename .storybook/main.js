const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': toPath('./src'),
    };

    config.module.rules.push({
      test: /\.mjs?$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(js,jsx|ts|tsx)'],
};
