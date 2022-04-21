import styled, { css } from 'styled-components';
import type { ChatBubbleProps } from './ChatBubble';

type StyledChatBubbleProps = {
  $position: ChatBubbleProps['position'];
  $align: ChatBubbleProps['align'];
};

const StyledChatBubbleContainer = styled.div<StyledChatBubbleProps>`
  ${({ theme, $align, $position }) => {
    const isLeft = $align === 'left';
    const isRight = $align === 'right';
    const borderRadiusMap = {
      topLeft: { first: '2xl', middle: isLeft ? 'md' : '2xl', last: isLeft ? 'md' : '2xl', single: '2xl' },
      topRight: { first: '2xl', middle: isRight ? 'md' : '2xl', last: isRight ? 'md' : '2xl', single: '2xl' },
      bottomRight: { first: isRight ? 'md' : '2xl', middle: isRight ? 'md' : '2xl', last: '2xl', single: '2xl' },
      bottomLeft: { first: isLeft ? 'md' : '2xl', middle: isLeft ? 'md' : '2xl', last: '2xl', single: '2xl' },
    };
    return css`
      align-items: center;
      background-color: ${isLeft ? theme.colors.gray[300] : theme.colors.blue[400]};
      border-top-left-radius: ${theme.radii[borderRadiusMap['topLeft'][$position]]};
      border-top-right-radius: ${theme.radii[borderRadiusMap['topRight'][$position]]};
      border-bottom-right-radius: ${theme.radii[borderRadiusMap['bottomRight'][$position]]};
      border-bottom-left-radius: ${theme.radii[borderRadiusMap['bottomLeft'][$position]]};
      color: ${isLeft ? theme.colors.gray[800] : theme.colors.white};
      display: flex;
      padding: ${theme.sizes[3]} ${theme.sizes[4]};
      line-height: ${theme.lineHeights.shorter};
      justify-content: center;
      max-width: ${theme.sizes.md};
    `;
  }};
`;

const StyledChatBubbleInner = styled.span`
  word-break: break-word;
`;

export const StyledChatBubble = {
  Container: StyledChatBubbleContainer,
  Inner: StyledChatBubbleInner,
};
