import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from 'jest/utils';
import Header from 'src/components/layout/header/Header';
import 'jest-styled-components';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
afterAll(cleanup);

describe('Header', () => {
  it('should render correctly Header', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/',
    }));

    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
