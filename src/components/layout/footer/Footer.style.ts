import styled from 'styled-components';

const StyledFooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.gray['200']};
  border-top: 1px solid ${({ theme }) => theme.colors.gray['300']};
  max-width: 100%;
  width: 100%;
`;

const StyledFooterInner = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.gray['500']};
  display: flex;
  flex-direction: row;
  height: ${({ theme }) => theme.sizes.footerHeight};
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.appMaxWidth};
  padding: 0 ${({ theme }) => theme.sizes.mainPadding};
`;

export const StyledFooter = {
  Container: StyledFooterContainer,
  Inner: StyledFooterInner,
};
