import breakpoints from './breakpoints';
import colors from './colors';
import radii from './radii';
import shadows from './shadows';
import sizes from './sizes';
import space from './space';
import typography from './typography';

const theme = {
  breakpoints,
  radii,
  colors,
  ...typography,
  sizes,
  shadows,
  space,
};

export type Theme = typeof theme;

export default theme;
