import styled, { css } from 'styled-components';

const StyledFooterContainer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[200]};
    border-top: 1px solid ${theme.colors.gray[300]};
    max-width: 100%;
    width: 100%;
  `}
`;

const StyledFooterInner = styled.div`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.gray[500]};
    display: flex;
    flex-direction: row;
    height: ${theme.sizes.footerHeight};
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${theme.sizes.appMaxWidth};
    padding: 0 ${theme.sizes.mainPadding};
  `}
`;

export const StyledFooter = {
  Container: StyledFooterContainer,
  Inner: StyledFooterInner,
};
