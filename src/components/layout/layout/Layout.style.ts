import styled, { css } from 'styled-components';

const StyledLayoutContainer = styled.div`
  ${({ theme }) => css`
    align-items: stretch;
    display: flex;
    flex: 1;
    max-width: 100%;
    height: ${`calc(100% - ${theme.sizes.headerHeight} - ${theme.sizes.footerHeight})`};
    width: 100%;
  `}
`;

const StyledLayoutInner = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    gap: ${theme.sizes[6]};
    margin: 0 auto;
    max-width: ${theme.sizes.appMaxWidth};
    padding: ${`${theme.sizes['8']} ${theme.sizes.mainPadding}`};
  `}
`;

export const StyledLayout = {
  Container: StyledLayoutContainer,
  Inner: StyledLayoutInner,
};
