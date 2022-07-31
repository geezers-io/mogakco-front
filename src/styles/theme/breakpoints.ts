import { BaseBreakpointConfig } from '@chakra-ui/theme-tools';
import { Breakpoints } from '@chakra-ui/theme-tools/dist/declarations/src/create-breakpoints';

const config: BaseBreakpointConfig = {
  xs: '30em',
  sm: '36em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

export const breakpoints: Breakpoints<typeof config> = {
  base: '0em',
  ...config,
};
