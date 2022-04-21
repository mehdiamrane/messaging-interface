import type { Message } from 'src/types/message';
import type { ChatBubbleProps } from 'src/components/conversation/chatBubble/ChatBubble';

export const sortMessages = (messages: Message[]): Message[] =>
  (messages || []).sort((a, b) => a.timestamp - b.timestamp);

export const getMessagePosition = (messages: Message[], index: number): ChatBubbleProps['position'] => {
  const previous = messages[index - 1];
  const current = messages[index];
  const next = messages[index + 1];
  if (previous?.authorId !== current.authorId && next?.authorId !== current.authorId) {
    return 'single';
  }
  if (previous?.authorId !== current.authorId && next?.authorId === current.authorId) {
    return 'first';
  }
  if (previous?.authorId === current.authorId && next?.authorId !== current.authorId) {
    return 'last';
  }
  return 'middle';
};
