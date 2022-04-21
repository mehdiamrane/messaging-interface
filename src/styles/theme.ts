import breakpoints from './breakpoints';
import devices from './devices';
import colors from './colors';
import radii from './radii';
import shadows from './shadows';
import sizes from './sizes';
import space from './space';
import typography from './typography';

const theme = {
  breakpoints,
  devices,
  radii,
  colors,
  ...typography,
  sizes,
  shadows,
  space,
};

export type Theme = typeof theme;

export default theme;
