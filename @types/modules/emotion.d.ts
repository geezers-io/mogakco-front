import '@emotion/react';
import { theme } from 'styles/theme';

type _Theme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends _Theme {}
}
