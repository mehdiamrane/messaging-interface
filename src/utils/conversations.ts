import type { Conversation } from 'src/types/conversation';
import type { BareUser } from 'src/types/user';
import { getLoggedUserId } from './users';

export const sortConversationsByLastActive = (conversations: Conversation[]): Conversation[] =>
  conversations.sort((a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp);

export const getOtherUserFromConversation = (conversation: Conversation): BareUser =>
  conversation.senderId === getLoggedUserId()
    ? { id: conversation.recipientId, nickname: conversation.recipientNickname }
    : { id: conversation.senderId, nickname: conversation.senderNickname };
