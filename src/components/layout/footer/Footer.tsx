import React, { FC } from 'react';
import { StyledFooter } from './Footer.style';

const Footer: FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <StyledFooter.Container>
      <StyledFooter.Inner>&copy; leboncoin - {year}</StyledFooter.Inner>
    </StyledFooter.Container>
  );
};

export default Footer;
