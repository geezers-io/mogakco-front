import { breakpoints } from 'styles/theme/breakpoints';

export const media = {
  base: `@media (min-width: ${breakpoints.base})`,
  xs: `@media (min-width: ${breakpoints.sm})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints['2xl']})`,
} as const;
