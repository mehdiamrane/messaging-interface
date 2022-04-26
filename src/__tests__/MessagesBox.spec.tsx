import React from 'react';
import { render } from 'jest/utils';
import { cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import MessagesBox from 'src/components/conversation/messagesBox/MessagesBox';
import 'jest-styled-components';
import { Conversation } from 'src/types/conversation';
import { Message, MessageSent } from 'src/types/message';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children,
);

const dummyConversation: Conversation = {
  id: 1,
  recipientId: 1,
  recipientNickname: 'Joe Mamma',
  senderId: 2,
  senderNickname: 'Mike Hawk',
  lastMessageTimestamp: Date.now(),
};

const dummyMessage: Message = {
  id: 1,
  conversationId: 1,
  authorId: 1,
  timestamp: Date.now(),
  body: 'Hello',
};

const dummyMessages: Message[] = [
  { ...dummyMessage, id: 5, timestamp: 50 },
  { ...dummyMessage, id: 4, timestamp: 40 },
  { ...dummyMessage, id: 3, timestamp: 30 },
  { ...dummyMessage, id: 2, timestamp: 20 },
  { ...dummyMessage, id: 1, timestamp: 10 },
];

const dummySentMessage: MessageSent = {
  timestamp: 1650841632,
  body: 'hello there',
  conversationId: 1,
  authorId: 1,
};

jest.mock('src/services/api', () => ({
  postMessage: () =>
    new Promise((resolve) => {
      resolve({ data: dummySentMessage, status: 201 });
    }),
}));

afterAll(cleanup);

describe('MessagesBox', () => {
  const ref: React.LegacyRef<HTMLDivElement> = null;
  Element.prototype.scrollIntoView = jest.fn();

  useRouter.mockImplementation(() => ({
    locale: 'en-US',
    prefetch: jest.fn(),
  }));

  it('should render MessagesBox with 5 messages', async () => {
    const { container } = render(
      <MessagesBox
        conversation={dummyConversation}
        messages={dummyMessages}
        loading={false}
        fetchMessages={jest.fn()}
        handleError={jest.fn()}
        messagesEndRef={ref}
      />,
    );

    const chatBubbles = await screen.findAllByTestId('chat-bubble');
    expect(chatBubbles).toHaveLength(5);
    expect(container).toMatchSnapshot();
  });

  it('should render MessagesBox with empty text InfoBox', async () => {
    const { container } = render(
      <MessagesBox
        conversation={dummyConversation}
        messages={[]}
        loading={false}
        fetchMessages={jest.fn()}
        handleError={jest.fn()}
        messagesEndRef={ref}
      />,
    );

    const infoBox = await screen.findByTestId('infobox-empty');
    expect(infoBox).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('should render MessagesBox with loading text InfoBox', async () => {
    const { container } = render(
      <MessagesBox
        conversation={dummyConversation}
        messages={[]}
        loading={true}
        fetchMessages={jest.fn()}
        handleError={jest.fn()}
        messagesEndRef={ref}
      />,
    );

    const infoBox = await screen.findByTestId('infobox-loading');
    expect(infoBox).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('should try to send a message in MessagesBox', async () => {
    const fetchMessages = jest.fn();
    const handleError = jest.fn();

    render(
      <MessagesBox
        conversation={dummyConversation}
        messages={[]}
        loading={false}
        fetchMessages={fetchMessages}
        handleError={handleError}
        messagesEndRef={ref}
      />,
    );

    const inputValue = 'test message';
    const submitButton = screen.getByTestId('messageform-submit');
    const inputField = screen.getByTestId('messageform-input');

    fireEvent.change(inputField, { target: { value: inputValue } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(inputField).toHaveValue('');
    });
    expect(fetchMessages).toHaveBeenCalled();
    expect(handleError).not.toHaveBeenCalled();
  });
});
