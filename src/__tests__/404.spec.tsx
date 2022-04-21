import React from 'react';
import { render } from 'jest/utils';
import { cleanup } from '@testing-library/react';
import Page404 from 'src/pages/404';
import 'jest-styled-components';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
afterAll(cleanup);

describe('Page404', () => {
  it('should render correctly Page404', () => {
    useRouter.mockImplementation(() => ({
      locale: 'en-US',
    }));
    const { container } = render(<Page404 />);
    expect(container).toMatchSnapshot();
  });
});
