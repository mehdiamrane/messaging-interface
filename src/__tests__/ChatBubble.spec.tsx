import React from 'react';
import { render } from 'jest/utils';
import ChatBubble from 'src/components/conversation/chatBubble/ChatBubble';
import 'jest-styled-components';

describe('ChatBubble', () => {
  it('should render correctly all 8 combinations of ChatBubble', () => {
    const { container } = render(
      <>
        <ChatBubble position='first' align='left'>
          Text
        </ChatBubble>
        <ChatBubble position='middle' align='left'>
          Text
        </ChatBubble>
        <ChatBubble position='last' align='left'>
          Text
        </ChatBubble>
        <ChatBubble position='single' align='left'>
          Text
        </ChatBubble>
        <ChatBubble position='first' align='right'>
          Text
        </ChatBubble>
        <ChatBubble position='middle' align='right'>
          Text
        </ChatBubble>
        <ChatBubble position='last' align='right'>
          Text
        </ChatBubble>
        <ChatBubble position='single' align='right'>
          Text
        </ChatBubble>
      </>,
    );
    expect(container).toMatchSnapshot();
  });
});
