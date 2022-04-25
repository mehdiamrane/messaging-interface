import React from 'react';
import { cleanup, screen, waitFor } from '@testing-library/react';
import { render } from 'jest/utils';
import ConversationPage from 'src/pages/conversation/[id]';
import { Conversation } from 'src/types/conversation';
import { Message } from 'src/types/message';
import { BareUser } from 'src/types/user';
import 'jest-styled-components';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const messages: Message[] = [
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

jest.mock('src/services/api', () => ({
  getMessagesByConversationId: () =>
    new Promise((resolve) => {
      resolve({ data: messages });
    }),
}));

jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children,
);

afterAll(cleanup);

describe('ConversationPage', () => {
  it('should render correctly the Conversation Page', async () => {
    useRouter.mockImplementation(() => ({
      basePath: '',
      pathname: '/',
      route: '/',
      asPath: '/',
      query: {},
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }));

    // for messagesEndRef.current.scrollIntoView
    Element.prototype.scrollIntoView = jest.fn();

    const dummyConversations: Conversation[] = [
      {
        id: 1,
        recipientId: 2,
        recipientNickname: 'Jeremie',
        senderId: 1,
        senderNickname: 'Thibaut',
        lastMessageTimestamp: 1625637849,
      },
      {
        id: 3,
        recipientId: 1,
        recipientNickname: 'Thibaut',
        senderId: 4,
        senderNickname: 'Elodie',
        lastMessageTimestamp: 1625648667,
      },
    ];

    const dummyCurrentConversation: Conversation = {
      id: 3,
      recipientId: 1,
      recipientNickname: 'Thibaut',
      senderId: 4,
      senderNickname: 'Elodie',
      lastMessageTimestamp: 1625648667,
    };

    const dummyOtherUser: BareUser = {
      id: 4,
      nickname: 'Elodie',
    };

    const { container } = render(
      <ConversationPage
        conversations={dummyConversations}
        currentConversation={dummyCurrentConversation}
        otherUser={dummyOtherUser}
      />,
    );

    expect(screen.queryByText('Jeremie')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Bonjour c'est le premier message de la première conversation")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText("Bonjour c'est le second message de la première conversation")).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });
});
