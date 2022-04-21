import React from 'react';
import { render } from 'jest/utils';
import { cleanup } from '@testing-library/react';
import Page500 from 'src/pages/500';
import 'jest-styled-components';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
afterAll(cleanup);

describe('Page500', () => {
  it('should render correctly Page500', () => {
    useRouter.mockImplementation(() => ({
      locale: 'en-US',
    }));
    const { container } = render(<Page500 />);
    expect(container).toMatchSnapshot();
  });
});
