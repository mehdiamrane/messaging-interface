import React from 'react';
import { render } from 'jest/utils';
import Footer from 'src/components/layout/footer/Footer';
import 'jest-styled-components';

describe('Footer', () => {
  it('should render correctly Footer', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
