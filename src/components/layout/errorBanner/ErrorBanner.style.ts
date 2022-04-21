import styled, { css } from 'styled-components';

const StyledErrorBannerContainer = styled.div<{ $isOpen: boolean }>`
  ${({ theme, $isOpen }) => css`
    background-color: ${theme.colors.red[400]};
    color: ${theme.colors.white};
    height: ${theme.sizes.headerHeight};
    left: 0;
    opacity: ${$isOpen ? 1 : 0};
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 150ms ease;
    z-index: ${$isOpen ? 10 : -1};
  `}
`;

const StyledErrorBannerInner = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    max-width: ${theme.sizes.appMaxWidth};
    padding: ${`${theme.sizes[1]} ${theme.sizes[12]}`};
  `}
`;

const StyledErrorBannerText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights.shorter};
  `}
`;

const StyledErrorBannerCloseIconButton = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.transparent};
    border: 0 solid transparent;
    border-radius: ${theme.radii.lg};
    color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    height: ${theme.sizes[10]};
    justify-content: center;
    position: absolute;
    top: ${theme.sizes[3]};
    right: ${theme.sizes[3]};
    width: ${theme.sizes[10]};
    transition: background-color 150ms ease;

    &:hover {
      background-color: ${theme.colors.whiteAlpha[400]};
    }

    &:active {
      background-color: ${theme.colors.whiteAlpha[200]};
    }
  `}
`;

export const StyledErrorBanner = {
  Container: StyledErrorBannerContainer,
  Inner: StyledErrorBannerInner,
  Text: StyledErrorBannerText,
  CloseIconButton: StyledErrorBannerCloseIconButton,
};
