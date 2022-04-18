import React, { FC } from 'react';
import { StyledHeader } from './Header.style';
import Image from 'next/image';
import Logo from 'public/images/lbc-logo.webp';
import navLinks from 'src/data/navLinks';
import NextLink from 'next/link';

const Header: FC = () => (
  <StyledHeader.Container>
    <StyledHeader.Inner>
      <Image src={Logo} alt="Leboncoin's logo" width={128} height={40} />
      <StyledHeader.Menu>
        {navLinks.map((navLink) => (
          <NextLink passHref href={navLink.url} key={navLink.key}>
            <StyledHeader.MenuItem key={navLink.key} aria-disabled={navLink.disabled} title='test'>
              {navLink.key}
            </StyledHeader.MenuItem>
          </NextLink>
        ))}
      </StyledHeader.Menu>
    </StyledHeader.Inner>
  </StyledHeader.Container>
);

export default Header;
