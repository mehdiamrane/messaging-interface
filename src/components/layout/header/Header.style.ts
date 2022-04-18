import styled from 'styled-components';

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

const StyledHeaderMenuItem = styled.a`
  background-color: ${({ theme }) => theme.colors.transparent};
  border-radius: ${({ theme }) => theme.radii.md};
  color: inherit;
  cursor: pointer;
  padding: ${({ theme }) => theme.sizes[2]};
  text-decoration: none;
  transition: background-color 150ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray['200']};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray['100']};
  }

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
