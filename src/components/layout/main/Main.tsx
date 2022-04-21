import React, { FC } from 'react';
import { StyledMain } from './Main.style';

type MainProps = {
  children: React.ReactNode;
  hideOnMobile?: boolean;
};

const Main: FC<MainProps> = ({ children, hideOnMobile }) => (
  <StyledMain.Container $hideOnMobile={hideOnMobile}>{children}</StyledMain.Container>
);

export default Main;
