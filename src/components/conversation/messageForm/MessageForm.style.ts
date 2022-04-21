import styled, { css } from 'styled-components';

const StyledMessagesFormContainer = styled.form`
  ${({ theme }) => css`
    align-items: stretch;
    display: flex;
    gap: ${theme.sizes[3]};
    height: 100%;
    justify-content: center;
    padding: ${theme.sizes[2]};
    width: 100%;
  `}
`;

const StyledMessagesFormInput = styled.input`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.gray[300]};
    border-radius: ${theme.radii.md};
    flex: 1;
    font-family: ${theme.fonts.body};
    line-height: ${theme.lineHeights.base};
    font-size: ${theme.fontSizes.md};
    padding: ${theme.sizes[2]};
    resize: none;
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

const StyledMessagesFormButton = styled.button`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.blue[200]};
    border: 2px solid ${theme.colors.blue[300]};
    border-radius: ${theme.radii.md};
    color: ${theme.colors.blue[900]};
    cursor: pointer;
    display: flex;
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.semibold};
    padding: 0 ${theme.sizes[3]};
    transition: opacity 150ms ease, border 150ms ease, background-color 150ms ease;

    :hover {
      background-color: ${theme.colors.blue[300]};
      border: 2px solid ${theme.colors.blue[400]};
    }

    :active {
      background-color: ${theme.colors.blue[100]};
      border: 2px solid ${theme.colors.blue[200]};
    }

    &[aria-disabled='true'] {
      opacity: 0.5;
      cursor: not-allowed;

      &:active {
        pointer-events: none;
      }
    }
  `}
`;

const StyledMessagesFormButtonText = styled.span`
  ${({ theme }) => css`
    display: none;

    @media ${theme.devices.md} {
      display: initial;
      margin-right: ${theme.sizes[2]};
    }
  `}
`;

export const StyledMessageForm = {
  Container: StyledMessagesFormContainer,
  Input: StyledMessagesFormInput,
  Button: StyledMessagesFormButton,
  ButtonText: StyledMessagesFormButtonText,
};
