import React from 'react';
import { render } from 'jest/utils';
import ErrorBanner from 'src/components/layout/errorBanner/ErrorBanner';
import 'jest-styled-components';

describe('ErrorBanner', () => {
  it('should render correctly ErrorBanner', () => {
    const { container } = render(<ErrorBanner error='This is an error' onClose={() => jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
