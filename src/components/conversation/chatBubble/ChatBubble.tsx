import React, { FC } from 'react';
import { StyledChatBubble } from './ChatBubble.style';

export type ChatBubbleProps = {
  position: 'first' | 'middle' | 'last' | 'single';
  align: 'left' | 'right';
  children: string;
  'data-testid'?: string;
};

const ChatBubble: FC<ChatBubbleProps> = ({ children, position, align, 'data-testid': dataTestId }) => {
  return (
    <StyledChatBubble.Container $position={position} $align={align} data-testid={dataTestId}>
      <StyledChatBubble.Inner>{children}</StyledChatBubble.Inner>
    </StyledChatBubble.Container>
  );
};

export default ChatBubble;
