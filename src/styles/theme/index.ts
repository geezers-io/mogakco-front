import { merge } from 'lodash';
import { theme as chakraDefaultTheme } from '@chakra-ui/theme';
import { colors } from 'styles/theme/colors';
import { palette } from 'styles/theme/palette';
import { breakpoints } from 'styles/theme/breakpoints';
import { radius } from 'styles/theme/radius';

const customTheme = {
  colors,
  palette,
  breakpoints,
  radii: radius,
};

export const theme = merge(chakraDefaultTheme, customTheme);
