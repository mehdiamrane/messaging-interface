import styled, { css } from 'styled-components';

export const StyledLocaleSelect = styled.select`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.gray[300]};
    border-radius: ${theme.radii.md};
    cursor: pointer;
    font-family: ${theme.fonts.body};
    line-height: ${theme.lineHeights.base};
    font-size: ${theme.fontSizes.sm};
    padding: ${theme.sizes[1]} ${theme.sizes[2]};
    transition: border 150ms ease;

    :hover {
      border: 2px solid ${theme.colors.gray[400]};
    }

    :focus {
      border: 2px solid ${theme.colors.blue[300]};
      outline: none;
    }
  `}
`;
