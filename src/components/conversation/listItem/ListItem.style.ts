import styled, { css } from 'styled-components';

const StyledListTextWrapper = styled.div`
  ${({ theme }) => css`
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: ${theme.sizes[2]};
    justify-content: center;
  `}
`;

const StyledListItemName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray[600]};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.medium};
    transition: color 150ms ease;
  `}
`;

const StyledListItemInfo = styled(StyledListItemName)`
  ${({ theme }) => css`
    color: ${theme.colors.gray[500]};
    font-size: ${theme.fontSizes.sm};
  `}
`;

const StyledListContainer = styled.a<{ $isCurrent: boolean }>`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.gray[100]};
    border-bottom: 1px solid ${theme.colors.gray[300]};
    cursor: pointer;
    display: flex;
    height: ${theme.sizes[20]};
    gap: ${theme.sizes[4]};
    padding: 0 ${theme.sizes[4]};
    text-decoration: none;
    transition: background-color 150ms ease;
    user-select: none;
  `}

  ${({ $isCurrent, theme }) =>
    $isCurrent
      ? css`
          background-color: ${theme.colors.blue[200]};
          ${StyledListItemName},
          ${StyledListItemInfo} {
            color: ${theme.colors.blue[600]};
          }
        `
      : css`
          &:hover {
            background-color: ${theme.colors.blue[100]};
            ${StyledListItemName},
            ${StyledListItemInfo} {
              color: ${theme.colors.blue[600]};
            }
          }

          &:active {
            background-color: ${theme.colors.blue[50]};
            ${StyledListItemName},
            ${StyledListItemInfo} {
              color: ${theme.colors.blue[400]};
            }
          }
        `}
`;

export const StyledListItem = {
  Container: StyledListContainer,
  TextWrapper: StyledListTextWrapper,
  Name: StyledListItemName,
  Info: StyledListItemInfo,
};
