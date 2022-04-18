import React from 'react';
import { render, type RenderOptions, type RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/styles/theme';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

interface Render {
  (ui: React.ReactElement, options?: RenderOptions): RenderResult;
}

const customRender: Render = (ui, options) =>
  render(ui, {
    wrapper: (props) => <AllProviders {...props} />,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
