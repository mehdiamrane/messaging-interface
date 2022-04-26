import React, { FC } from 'react';
import { StyledInfoBox } from './InfoBox.style';

type InfoBoxProps = {
  children: React.ReactNode | string;
  'data-testid'?: string;
};

const InfoBox: FC<InfoBoxProps> = ({ children, 'data-testid': dataTestId }) => {
  return (
    <StyledInfoBox.Container data-testid={dataTestId}>
      <StyledInfoBox.Inner>{children}</StyledInfoBox.Inner>
    </StyledInfoBox.Container>
  );
};

export default InfoBox;
