import styled, { css } from 'styled-components';

const StyledHeaderContainer = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.gray[300]};
    max-width: 100%;
    width: 100%;
  `}
`;

const StyledHeaderInner = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: ${theme.sizes.headerHeight};
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${theme.sizes.appMaxWidth};
    padding: 0 ${theme.sizes.mainPadding};
  `}
`;

const StyledHeaderMenu = styled.nav`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: ${theme.sizes[4]};
  `}
`;

const StyledHeaderMenuItem = styled.a<{ $isCurrent: boolean }>`
  ${({ theme }) => css`
    background-color: ${theme.colors.transparent};
    border-radius: ${theme.radii.md};
    color: inherit;
    cursor: pointer;
    padding: ${theme.sizes[2]};
    text-decoration: none;
    transition: opacity 150ms ease, background-color 150ms ease;
    user-select: none;
  `}

  ${({ $isCurrent, theme }) =>
    $isCurrent
      ? css`
          background-color: ${theme.colors.orange[100]};
          color: ${theme.colors.orange[800]};
        `
      : css`
          &:hover {
            background-color: ${theme.colors.gray[200]};
            color: inherit;
          }

          &:active {
            background-color: ${theme.colors.gray[100]};
            color: inherit;
          }
        `}

  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.5;

    &:active {
      pointer-events: none;
    }
  }
`;

export const StyledHeader = {
  Container: StyledHeaderContainer,
  Inner: StyledHeaderInner,
  Menu: StyledHeaderMenu,
  MenuItem: StyledHeaderMenuItem,
};
