import styled, { css } from 'styled-components';

const StyledHeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['300']};
  max-width: 100%;
  width: 100%;
`;

const StyledHeaderInner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: ${({ theme }) => theme.sizes.headerHeight};
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.appMaxWidth};
  padding: 0 ${({ theme }) => theme.sizes.mainPadding};
`;

const StyledHeaderMenu = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.sizes[4]};
`;

const StyledHeaderMenuItem = styled.a<{ $isActive: boolean }>`
  background-color: ${({ theme }) => theme.colors.transparent};
  border-radius: ${({ theme }) => theme.radii.md};
  color: inherit;
  cursor: pointer;
  padding: ${({ theme }) => theme.sizes[2]};
  text-decoration: none;
  transition: background-color 150ms ease;

  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: ${({ theme }) => theme.colors.orange['100']};
          color: ${({ theme }) => theme.colors.orange[800]};
        `
      : css`
          &:hover {
            background-color: ${({ theme }) => theme.colors.gray['200']};
            color: inherit;
          }

          &:active {
            background-color: ${({ theme }) => theme.colors.gray['100']};
            color: inherit;
          }
        `}

  /* Adding cursor just works: */
  &[aria-disabled='true'] {
    color: ${({ theme }) => theme.colors.gray['500']};
    cursor: not-allowed;

    /* Makes link non-clickable: */
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
