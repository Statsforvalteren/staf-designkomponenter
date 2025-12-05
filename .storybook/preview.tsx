import type { Preview } from '@storybook/react';
import React from 'react';
import { ToastProvider } from '../src/components/ui/Toast';
import { ToastContainer } from '../src/components/ui/Toast';

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
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastContainer />
      </ToastProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default preview;