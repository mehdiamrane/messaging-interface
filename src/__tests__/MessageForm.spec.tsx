import React from 'react';
import { render } from 'jest/utils';
import MessageForm from 'src/components/conversation/messageForm/MessageForm';
import 'jest-styled-components';

describe('MessageForm', () => {
  it('should render correctly MessageForm', () => {
    const { container } = render(<MessageForm onChange={jest.fn()} onSubmit={jest.fn()} value='' />);
    expect(container).toMatchSnapshot();
  });
});
