import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import '../src/styles/themes/default.css';
import '../src/styles/themes/dark.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  },
};
export default preview;
