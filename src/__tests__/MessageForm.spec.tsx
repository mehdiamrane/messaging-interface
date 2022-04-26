import React from 'react';
import { render } from 'jest/utils';
import { screen, fireEvent } from '@testing-library/react';
import MessageForm from 'src/components/conversation/messageForm/MessageForm';
import 'jest-styled-components';

describe('MessageForm', () => {
  it('should render correctly MessageForm', () => {
    const { container } = render(<MessageForm onChange={jest.fn()} onSubmit={jest.fn()} value='' />);
    expect(container).toMatchSnapshot();
  });

  it('should try to send a message', async () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    onSubmit.mockImplementation((event) => {
      event.preventDefault();
    });

    render(<MessageForm onChange={onChange} onSubmit={onSubmit} value='' />);

    const inputValue = 'test message';
    const submitButton = screen.getByTestId('messageform-submit');
    const inputField = screen.getByTestId('messageform-input');

    fireEvent.change(inputField, { target: { value: inputValue } });
    fireEvent.click(submitButton);
    expect(onChange).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });
});
