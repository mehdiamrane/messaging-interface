import React, { FC } from 'react';
import { StyledInfoBox } from './InfoBox.style';

const InfoBox: FC = ({ children }) => {
  return (
    <StyledInfoBox.Container>
      <StyledInfoBox.Inner>{children}</StyledInfoBox.Inner>
    </StyledInfoBox.Container>
  );
};

export default InfoBox;
