const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(js,jsx|ts|tsx)'],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
};
