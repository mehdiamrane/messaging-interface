import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from 'jest/utils';
import Layout from 'src/components/layout/Layout';
import 'jest-styled-components';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
afterAll(cleanup);

describe('Layout', () => {
  it('should render correctly Layout', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/',
    }));

    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
