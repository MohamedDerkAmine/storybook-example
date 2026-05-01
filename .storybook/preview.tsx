import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { v1Theme } from '../src/theme/v1';
import { v2LightTheme, v2DarkTheme } from '../src/theme/v2';

const themes = {
  'v1': v1Theme,
  'v2-light': v2LightTheme,
  'v2-dark': v2DarkTheme,
} as const;

type ThemeKey = keyof typeof themes;

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const themeKey = (context.globals.theme as ThemeKey) ?? 'v2-light';
      const theme = themes[themeKey] ?? v2LightTheme;
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
  initialGlobals: {
    theme: 'v2-light',
  },
  globalTypes: {
    theme: {
      description: 'Design system theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'v1', title: 'v1 (legacy)' },
          { value: 'v2-light', title: 'v2 light' },
          { value: 'v2-dark', title: 'v2 dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
  },
};

export default preview;
