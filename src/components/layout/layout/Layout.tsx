import React, { FC } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { StyledLayout } from './Layout.style';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <StyledLayout.Container>
      <StyledLayout.Inner>{children}</StyledLayout.Inner>
    </StyledLayout.Container>
    <Footer />
  </>
);

export default Layout;
