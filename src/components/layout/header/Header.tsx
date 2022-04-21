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
        <NextLink passHref href='/'>
          <a title={t('header.nav.links.home')}>
            <Image src={Logo} alt={t('header.logo.alt')} width={128} height={40} />
          </a>
        </NextLink>
        <StyledHeader.Menu>
          {navLinks.map((navLink) => (
            <NextLink passHref href={navLink.url} key={navLink.key}>
              <StyledHeader.MenuItem
                aria-disabled={navLink.disabled}
                title={
                  navLink.disabled ? t('header.nav.title.disabled') : t('header.nav.title.goTo', { name: navLink.key })
                }
                $isCurrent={navLink.routes.includes(router.route)}
              >
                {t(`header.nav.links.${navLink.key}`)}
              </StyledHeader.MenuItem>
            </NextLink>
          ))}
        </StyledHeader.Menu>
      </StyledHeader.Inner>
    </StyledHeader.Container>
  );
};

export default Header;
