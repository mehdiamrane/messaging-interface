import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('App', () => {
  it('should render correctly Home', () => {
    render(<Home />);
    expect(screen.getByText(/leboncoin/)).toBeInTheDocument();
  });
});
