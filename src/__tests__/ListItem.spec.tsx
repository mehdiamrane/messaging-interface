import React from 'react';
import { render } from 'jest/utils';
import { cleanup } from '@testing-library/react';
import ListItem from 'src/components/conversation/listItem/ListItem';
import 'jest-styled-components';
import { Conversation } from 'src/types/conversation';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
afterAll(cleanup);

describe('ListItem', () => {
  it('should render correctly ListItem', () => {
    useRouter.mockImplementation(() => ({
      query: {
        id: 1,
      },
    }));

    const dummyConversation: Conversation = {
      id: 1,
      recipientId: 2,
      recipientNickname: 'Jeremie',
      senderId: 1,
      senderNickname: 'Thibaut',
      lastMessageTimestamp: 1625637849,
    };

    const { container } = render(<ListItem conversation={dummyConversation} />);
    expect(container).toMatchSnapshot();
  });
});
