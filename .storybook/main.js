module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|ts)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
  ],
  framework: '@storybook/angular',
  core: {
    builder: 'webpack5',
  },
};
