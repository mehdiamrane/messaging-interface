import React, { FC } from 'react';
import { StyledMain } from './Main.style';

const Main: FC = ({ children }) => (
  <StyledMain.Container>
    <StyledMain.Inner>{children}</StyledMain.Inner>
  </StyledMain.Container>
);

export default Main;
