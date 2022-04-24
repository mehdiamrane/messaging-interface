import { Conversation } from 'src/types/conversation';
import { BareUser } from 'src/types/user';
import { getOtherUserFromConversation, sortConversationsByLastActive } from '../conversations';

const dummyConversation: Conversation = {
  id: 0,
  recipientId: 1,
  recipientNickname: 'Joe Mamma',
  senderId: 2,
  senderNickname: 'Mike Hawk',
  lastMessageTimestamp: Date.now(),
};

describe('sortConversationsByLastActive', () => {
  it('should sort conversations', () => {
    const expected: Conversation[] = [
      { ...dummyConversation, id: 5, lastMessageTimestamp: 50 },
      { ...dummyConversation, id: 4, lastMessageTimestamp: 40 },
      { ...dummyConversation, id: 3, lastMessageTimestamp: 30 },
      { ...dummyConversation, id: 2, lastMessageTimestamp: 20 },
      { ...dummyConversation, id: 1, lastMessageTimestamp: 10 },
    ];

    const shuffledArray = expected.sort(() => 0.5 - Math.random());
    const sortedArray = sortConversationsByLastActive(shuffledArray);
    expect(sortedArray).toEqual(expected);
  });
});

describe('getOtherUserFromConversation', () => {
  it('should return the other user', () => {
    const expected: BareUser = {
      id: 2,
      nickname: 'Mike Hawk',
    };
    const otherUser = getOtherUserFromConversation(dummyConversation);
    expect(otherUser).toEqual(expected);
  });
});
