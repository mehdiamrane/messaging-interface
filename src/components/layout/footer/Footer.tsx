import React, { FC } from 'react';
import LocaleSelect from 'src/components/shared/LocaleSelect/LocaleSelect';
import { StyledFooter } from './Footer.style';

const Footer: FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <StyledFooter.Container>
      <StyledFooter.Inner>
        <span>&copy; leboncoin - {year}</span>
        <LocaleSelect />
      </StyledFooter.Inner>
    </StyledFooter.Container>
  );
};

export default Footer;
