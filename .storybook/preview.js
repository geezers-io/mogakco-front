import { ThemeProvider } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalStyles, theme } from '../src/styles';

export const parameters = {
  chakra: { theme },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
