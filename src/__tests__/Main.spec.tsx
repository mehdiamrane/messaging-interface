import React from 'react';
import { render } from 'jest/utils';
import Main from 'src/components/layout/main/Main';
import 'jest-styled-components';

describe('Main', () => {
  it('should render correctly Main', () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});
