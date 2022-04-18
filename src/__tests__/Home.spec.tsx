import React from 'react';
import { render } from 'jest/utils';
import Home from 'src/pages/index';
import 'jest-styled-components';

describe('Home', () => {
  it('should render correctly Home', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
