import React, { FC } from 'react';
import { StyledAside } from './Aside.style';

type AsideProps = {
  children: React.ReactNode;
  hideOnMobile?: boolean;
};

const Aside: FC<AsideProps> = ({ children, hideOnMobile }) => (
  <StyledAside.Container $hideOnMobile={hideOnMobile}>{children}</StyledAside.Container>
);

export default Aside;
