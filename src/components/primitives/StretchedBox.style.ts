import styled, { css } from 'styled-components';

const StretchedBoxContainer = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

const StretchedBoxHeader = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.gray[200]};
    border: 1px solid ${theme.colors.gray[300]};
    border-top-left-radius: ${theme.radii.lg};
    border-top-right-radius: ${theme.radii.lg};
    display: flex;
    min-height: ${theme.sizes[16]};
    justify-content: center;
    width: 100%;
  `}
`;

const StretchedBoxInner = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[200]};
    border: 1px solid ${theme.colors.gray[300]};
    flex: 1 1 0;
    overflow: auto;
    width: 100%;
  `}
`;

const StretchedBoxFooter = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.gray[200]};
    border: 1px solid ${theme.colors.gray[300]};
    border-bottom-left-radius: ${theme.radii.lg};
    border-bottom-right-radius: ${theme.radii.lg};
    display: flex;
    min-height: ${theme.sizes[16]};
    justify-content: center;
    width: 100%;
  `}
`;

export const StretchedBox = {
  Container: StretchedBoxContainer,
  Header: StretchedBoxHeader,
  Inner: StretchedBoxInner,
  Footer: StretchedBoxFooter,
};
