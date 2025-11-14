import type { Preview } from '@storybook/react';
import '@digdir/designsystemet-css';
import '@statsforvalteren/designsystemet-theme';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      codePanel: true,
    },
  },
  decorators: [
    (Story) => {
      return Story();
    },
  ],
  tags: ['autodocs'],
};

export default preview;
