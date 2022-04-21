import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { FC } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

import dynamic from 'next/dynamic';

const ErrorBanner = dynamic(() => import('src/components/layout/errorBanner/ErrorBanner'), { ssr: false });

import { Conversation } from 'src/types/conversation';
import { Message } from 'src/types/message';

import { useTranslation } from 'next-i18next';
import Aside from 'src/components/layout/aside/Aside';
import Main from 'src/components/layout/main/Main';
// import ErrorBanner from 'src/components/layout/errorBanner/ErrorBanner';
import List from 'src/components/conversation/list/List';
import MessagesBox from 'src/components/conversation/messagesBox/MessagesBox';

import { getMessagesByConversationId, getConversationsByUserId } from 'src/services/api';
import { getLoggedUserId } from 'src/utils/users';
import { getOtherUserFromConversation } from 'src/utils/conversations';
import { BareUser } from 'src/types/user';

interface ConversationProps {
  conversations: Conversation[];
  currentConversation: Conversation;
  otherUser: BareUser;
}

const ConversationPage: FC<ConversationProps> = ({ conversations, currentConversation, otherUser }) => {
  const { t } = useTranslation('common');
  const [messages, setMessages] = useState<Message[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    return () => {
      console.log('unmount');
      setLoading(true);
    };
  }, [currentConversation]);

  const getMessages = useCallback(async () => {
    console.log('getting messages');
    const { data: messagesData } = await getMessagesByConversationId(currentConversation.id);
    setMessages(messagesData);
    setLoading(false);
  }, [currentConversation]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleError = useCallback((error?: string) => {
    setError(error);
  }, []);

  return (
    <>
      <Head>
        <title>{t('conversation.meta.title', { name: otherUser.nickname })}</title>
        <meta name='description' content={t('conversation.meta.description', { name: otherUser.nickname })}></meta>
      </Head>
      <ErrorBanner error={error} onClose={() => setError(undefined)} />
      <Aside hideOnMobile>
        <List conversations={conversations} />
      </Aside>
      <Main hideOnMobile={false}>
        <MessagesBox
          fetchMessages={getMessages}
          handleError={handleError}
          loading={loading}
          messages={messages}
          conversation={currentConversation}
          messagesEndRef={messagesEndRef}
        />
      </Main>
    </>
  );
};

export default ConversationPage;

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  const { id } = params;

  const { data: conversations } = await getConversationsByUserId(getLoggedUserId());

  const currentConversation = conversations.find((conv) => conv.id === Number(id));

  const otherUser = getOtherUserFromConversation(currentConversation);

  return {
    props: {
      otherUser,
      conversations,
      currentConversation,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
