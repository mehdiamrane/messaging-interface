import React from 'react';
import type { FC } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

import { useTranslation } from 'next-i18next';

const Home: FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>Messaging Interface</title>
        <meta name='description' content='Frontend exercise for developpers who want to join leboncoin'></meta>
      </Head>
      <p>{t('lbc')}</p>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
};
