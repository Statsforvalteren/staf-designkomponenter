import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: [
    '../storybook/stories/**/*.mdx',
    '../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
  ],
  docs: {
    defaultName: "Dokumentasjon",
  },
};

export default config;