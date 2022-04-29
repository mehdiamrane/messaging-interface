import styled, { css } from 'styled-components';
import { StretchedBox } from 'src/components/primitives/StretchedBox.style';

const StyledListContainer = styled(StretchedBox.Container)``;

const StyledListHeader = styled(StretchedBox.Header)`
  ${({ theme }) => css`
    span {
      color: ${theme.colors.gray[800]};
      font-size: ${theme.fontSizes.lg};
      font-weight: ${theme.fontWeights.semibold};
    }
  `}
`;

const StyledListInner = styled(StretchedBox.Inner)`
  ${({ theme }) => css`
    border-bottom-left-radius: ${theme.radii.lg};
    border-bottom-right-radius: ${theme.radii.lg};
  `}
`;

const StyledListFooter = styled(StretchedBox.Footer).attrs({ as: 'a' })`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue[100]};
    cursor: pointer;
    transition: border 150ms ease, background-color 150ms ease;

    &:hover {
      background-color: ${theme.colors.blue[200]};
      border: 1px solid ${theme.colors.blue[300]};
    }

    &:active {
      background-color: ${theme.colors.blue[100]};
      border: 1px solid ${theme.colors.blue[200]};
    }

    span {
      color: ${theme.colors.blue[900]};
      font-size: ${theme.fontSizes.lg};
      font-weight: ${theme.fontWeights.semibold};
      user-select: none;
    }
  `}
`;

export const StyledList = {
  Container: StyledListContainer,
  Header: StyledListHeader,
  Inner: StyledListInner,
  Footer: StyledListFooter,
};
