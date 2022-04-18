import React, { FC } from 'react';
import { StyledHeader } from './Header.style';
import Image from 'next/image';
import Logo from 'public/images/lbc-logo.webp';
import navLinks from 'src/data/navLinks';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';

const Header: FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <StyledHeader.Container>
      <StyledHeader.Inner>
        <Image src={Logo} alt={t('logo_alt')} width={128} height={40} />
        <StyledHeader.Menu>
          {navLinks.map((navLink) => (
            <NextLink passHref href={navLink.url} key={navLink.key}>
              <StyledHeader.MenuItem
                key={t(navLink.key)}
                aria-disabled={navLink.disabled}
                title={navLink.disabled ? t('title.disabled') : t('title.goTo', { name: navLink.key })}
                $isActive={router.asPath === navLink.url}
              >
                {t(navLink.key)}
              </StyledHeader.MenuItem>
            </NextLink>
          ))}
        </StyledHeader.Menu>
      </StyledHeader.Inner>
    </StyledHeader.Container>
  );
};

export default Header;
