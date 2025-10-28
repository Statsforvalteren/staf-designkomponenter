module.exports = {
  stories: [
    '../storybook/stories/**/*.stories.mdx',
    '../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};