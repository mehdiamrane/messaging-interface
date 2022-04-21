import React from 'react';
import { render } from 'jest/utils';
import { cleanup } from '@testing-library/react';
import Footer from 'src/components/layout/footer/Footer';
import 'jest-styled-components';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
afterAll(cleanup);

describe('Footer', () => {
  it('should render correctly Footer', () => {
    useRouter.mockImplementation(() => ({
      locale: 'en-US',
    }));
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
