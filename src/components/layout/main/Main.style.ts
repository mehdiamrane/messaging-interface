import styled from 'styled-components';

const StyledMainContainer = styled.main`
  flex-grow: 1;
  max-width: 100%;
  min-height: ${({ theme }) => `calc(100% - ${theme.sizes.headerHeight} - ${theme.sizes.footerHeight})`};
  width: 100%;
`;

const StyledMainInner = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.appMaxWidth};
  padding: ${({ theme }) => `${theme.sizes['8']} ${theme.sizes.mainPadding}`};
`;

export const StyledMain = {
  Container: StyledMainContainer,
  Inner: StyledMainInner,
};
