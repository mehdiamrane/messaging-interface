import axios from 'axios';
import { Conversation } from 'src/types/conversation';
import { Message, MessageSent } from 'src/types/message';
import { getConversationsByUserId, getMessagesByConversationId, postMessage } from '../api';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getConversationsByUserId', () => {
  it('should return a list of conversations', async () => {
    const expected: Conversation[] = [
      {
        id: 1,
        recipientId: 2,
        recipientNickname: 'Jeremie',
        senderId: 1,
        senderNickname: 'Thibaut',
        lastMessageTimestamp: 1625637849,
      },
      {
        id: 2,
        recipientId: 3,
        recipientNickname: 'Patrick',
        senderId: 1,
        senderNickname: 'Thibaut',
        lastMessageTimestamp: 1620284667,
      },
    ];

    mockedAxios.get.mockReturnValueOnce(
      new Promise((resolve) => {
        resolve({ data: expected });
      }),
    );

    const result = await getConversationsByUserId(1);

    expect(axios.get).toHaveBeenCalledWith('/conversations', { params: { senderId: 1 } });
    expect(result).toEqual({ data: expected });
  });
});

describe('getMessagesByConversationId', () => {
  it('should return a list of messages', async () => {
    const expected: Message[] = [
      {
        id: 1,
        conversationId: 1,
        timestamp: 1625637849,
        authorId: 1,
        body: "Bonjour c'est le premier message de la première conversation",
      },
      {
        id: 2,
        conversationId: 1,
        timestamp: 1625637867,
        authorId: 1,
        body: "Bonjour c'est le second message de la première conversation",
      },
    ];

    mockedAxios.get.mockReturnValueOnce(
      new Promise((resolve) => {
        resolve({ data: expected });
      }),
    );

    const result = await getMessagesByConversationId(1);

    expect(axios.get).toHaveBeenCalledWith('/messages', { params: { conversationId: 1 } });
    expect(result).toEqual({ data: expected });
  });
});

describe('postMessage', () => {
  it('should make a post request and send a 201 response', async () => {
    const expected: MessageSent = {
      timestamp: 1650841632,
      body: 'hello there',
      conversationId: 3,
      authorId: 1,
    };

    mockedAxios.post.mockReturnValueOnce(
      new Promise((resolve) => {
        resolve({ data: expected, status: 201 });
      }),
    );

    const result = await postMessage(expected.conversationId, expected);

    expect(axios.post).toHaveBeenCalledWith('/messages/3', expected);
    expect(result).toEqual({ data: expected, status: 201 });
  });
});
