import React, { FC } from 'react';
import { StyledChatBubble } from './ChatBubble.style';

export type ChatBubbleProps = {
  position: 'first' | 'middle' | 'last' | 'single';
  align: 'left' | 'right';
  children: string;
};

const ChatBubble: FC<ChatBubbleProps> = ({ children, position, align }) => {
  return (
    <StyledChatBubble.Container $position={position} $align={align}>
      <StyledChatBubble.Inner>{children}</StyledChatBubble.Inner>
    </StyledChatBubble.Container>
  );
};

export default ChatBubble;
