import styled, { css } from 'styled-components';

const StyledMainContainer = styled.main<{ $hideOnMobile: boolean }>`
  ${({ theme, $hideOnMobile }) => css`
    display: ${$hideOnMobile ? 'none' : 'initial'};
    ${!$hideOnMobile ? 'flex: 1;' : null}

    @media ${theme.devices.md} {
      display: initial;
      flex: 1;
      width: 100%;
    }
  `}
`;

export const StyledMain = {
  Container: StyledMainContainer,
};
