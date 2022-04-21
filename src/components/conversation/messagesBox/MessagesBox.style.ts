import styled, { css } from 'styled-components';
import { StretchedBox } from 'src/components/primitives/StretchedBox.style';
import type { ChatBubbleProps } from 'src/components/conversation/chatBubble/ChatBubble';

type StyledChatItemProps = {
  $position: ChatBubbleProps['position'];
  $align: ChatBubbleProps['align'];
  $isFirstMessage: boolean;
};

const StyledMessagesBoxContainer = styled(StretchedBox.Container)``;

const StyledMessagesBoxHeader = styled(StretchedBox.Header)`
  ${({ theme }) => css`
    flex-direction: column;
    justify-content: center;
    gap: ${theme.sizes[1]};
    padding: 0 ${theme.sizes[5]};
    position: relative;
    @media ${theme.devices.md} {
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`;

const StyledMessagesBoxName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray[800]};
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.semibold};
  `}
`;

const StyledMessagesBoxBackIconWrapper = styled.a`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.blue[100]};
    border: 1px solid ${theme.colors.blue[200]};
    border-radius: ${theme.radii.full};
    color: ${theme.colors.blue[800]};
    cursor: pointer;
    display: flex;
    height: ${theme.sizes[10]};
    justify-content: center;
    position: absolute;
    top: ${theme.sizes[3]};
    left: ${theme.sizes[3]};
    width: ${theme.sizes[10]};
    transition: background-color 150ms ease, color 150ms ease;

    &:hover {
      background-color: ${theme.colors.blue[200]};
      border: 1px solid ${theme.colors.blue[300]};
      color: ${theme.colors.blue[900]};
    }

    &:active {
      background-color: ${theme.colors.blue[100]};
      border: 1px solid ${theme.colors.blue[200]};
      color: ${theme.colors.blue[700]};
    }

    @media ${theme.devices.md} {
      display: none;
    }
  `}
`;

const StyledMessagesBoxInfo = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray[500]};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.medium};
  `}
`;

const StyledMessagesBoxInner = styled(StretchedBox.Inner)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[200]};
    display: flex;
    flex-direction: column;
    padding: ${theme.sizes[4]};
  `}
`;

const StyledMessagesBoxChatItem = styled.div<StyledChatItemProps>`
  ${({ theme, $align, $position, $isFirstMessage }) => {
    const isLeft = $align === 'left';
    const isRight = !isLeft;
    const hasMarginTop = !$isFirstMessage && ['first', 'single'].includes($position);

    return css`
      align-items: ${isLeft ? 'flex-start' : 'flex-end'};
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: ${theme.sizes[isRight ? 8 : 0]};
      margin-right: ${theme.sizes[isLeft ? 8 : 0]};
      margin-top: ${theme.sizes[hasMarginTop ? 6 : $isFirstMessage ? 0 : 1]};
    `;
  }}
`;

const StyledMessagesBoxChatItemDate = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray[500]};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.normal};
    margin-top: ${theme.sizes[2]};
  `}
`;

const StyledMessagesBoxFooter = styled(StretchedBox.Footer)`
  ${({ theme }) => css`
    min-height: ${theme.sizes[16]};
    overflow: hidden;
  `}
`;

export const StyledMessagesBox = {
  Container: StyledMessagesBoxContainer,
  Header: StyledMessagesBoxHeader,
  Name: StyledMessagesBoxName,
  Info: StyledMessagesBoxInfo,
  Inner: StyledMessagesBoxInner,
  BackIconWrapper: StyledMessagesBoxBackIconWrapper,
  ChatItem: StyledMessagesBoxChatItem,
  ChatItemDate: StyledMessagesBoxChatItemDate,
  Footer: StyledMessagesBoxFooter,
};
