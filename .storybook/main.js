module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/angular',
  core: {
    builder: 'webpack5',
  },
};
