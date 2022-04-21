import React from 'react';
import type { FC } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

import { useTranslation } from 'next-i18next';
import Main from 'src/components/layout/main/Main';

import InfoBox from 'src/components/shared/InfoBox/InfoBox';

const Page404: FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('error.404.title')}</title>
        <meta name='description' content={t('error.404.text')}></meta>
      </Head>
      <Main>
        <InfoBox>{t('error.404.text')}</InfoBox>
      </Main>
    </>
  );
};

export default Page404;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
