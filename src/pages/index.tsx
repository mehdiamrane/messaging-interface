import React from 'react';
import type { FC } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

import { Conversation } from 'src/types/conversation';
import { User } from 'src/types/user';

import { useTranslation } from 'next-i18next';
import Aside from 'src/components/layout/aside/Aside';
import Main from 'src/components/layout/main/Main';
import List from 'src/components/conversation/list/List';

import { getConversationsByUserId } from 'src/services/api';
import { getLoggedUserId } from 'src/utils/users';
import InfoBox from 'src/components/shared/InfoBox/InfoBox';

interface HomeProps {
  users: User[];
  conversations: Conversation[];
}

const Home: FC<HomeProps> = ({ conversations }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('index.meta.title')}</title>
        <meta name='description' content={t('index.meta.description')}></meta>
      </Head>
      <Aside hideOnMobile={false}>
        <List conversations={conversations} />
      </Aside>
      <Main hideOnMobile>
        <InfoBox>{t('index.explainerText')}</InfoBox>
      </Main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const { data: conversations } = await getConversationsByUserId(getLoggedUserId());

    return {
      props: {
        conversations,
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
      redirect: {
        destination: `/${locale}/500`,
      },
    };
  }
};
