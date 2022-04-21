import styled, { css } from 'styled-components';

const StyledAsideContainer = styled.aside<{ $hideOnMobile: boolean }>`
  ${({ theme, $hideOnMobile }) => css`
    display: ${$hideOnMobile ? 'none' : 'initial'};
    ${!$hideOnMobile ? 'width: 100%' : null};

    @media ${theme.devices.md} {
      display: initial;
      flex-shrink: 0;
      width: ${theme.sizes['2xs']};
    }

    @media ${theme.devices.lg} {
      width: ${theme.sizes['xs']};
    }
  `}
`;

export const StyledAside = {
  Container: StyledAsideContainer,
};
