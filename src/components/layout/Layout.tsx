import React, { FC } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
