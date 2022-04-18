import 'styled-components';
import type { Theme } from 'src/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    name?: string;
  }
}
