import styled, { css } from 'styled-components';

const StyledInfoBoxContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const StyledInfoBoxInner = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blackAlpha[50]};
    border: 2px solid ${theme.colors.blackAlpha[400]};
    border-radius: ${theme.radii.lg};
    color: ${theme.colors.blackAlpha[600]};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights.base};
    max-width: ${theme.sizes.sm};
    padding: ${theme.sizes[12]};
    width: 100%;
  `}
`;

export const StyledInfoBox = {
  Container: StyledInfoBoxContainer,
  Inner: StyledInfoBoxInner,
};
