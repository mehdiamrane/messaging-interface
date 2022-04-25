import React, { FC, useMemo, useState, useCallback } from 'react';
import { StyledMessagesBox } from './MessagesBox.style';
import { Conversation } from 'src/types/conversation';
import { Message, MessageSent } from 'src/types/message';
import { useTranslation } from 'next-i18next';
import MessageForm from '../messageForm/MessageForm';
import { getOtherUserFromConversation } from 'src/utils/conversations';
import { sortMessages, getMessagePosition } from 'src/utils/messages';
import { formatRelativeDate, formatDate, timestampToDate } from 'src/utils/dates';
import { postMessage } from 'src/services/api';
import InfoBox from 'src/components/shared/InfoBox/InfoBox';
import ChatBubble from '../chatBubble/ChatBubble';
import { useRouter } from 'next/router';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import NextLink from 'next/link';
import { getLoggedUserId } from 'src/utils/users';

interface MessagesBoxProps {
  conversation: Conversation;
  messages: Message[];
  loading: boolean;
  fetchMessages: () => void;
  handleError: (error: string) => void;
  messagesEndRef: React.LegacyRef<HTMLDivElement>;
}

const MessagesBox: FC<MessagesBoxProps> = ({
  loading,
  messages,
  conversation,
  fetchMessages,
  handleError,
  messagesEndRef,
}) => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  const [value, setValue] = useState<string>('');

  const sortedMessages = useMemo(() => sortMessages(messages), [messages]);
  const { lastMessageTimestamp, id: conversationId } = conversation;
  const { nickname, id } = useMemo(() => getOtherUserFromConversation(conversation), [conversation]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (value.trim().length === 0) {
        return;
      }
      // Trigger a fake error when message includes 'error'
      if (value.includes('error')) {
        handleError(t('error.banner.submitMessage'));
        return;
      }
      const message: MessageSent = {
        timestamp: Date.now() / 1000,
        body: value,
        conversationId,
        authorId: getLoggedUserId(),
      };

      postMessage(conversationId, message)
        .then(() => {
          fetchMessages();
          setValue('');
        })
        .catch(() => handleError(t('error.banner.submitMessage')));
    },
    [value, conversationId, fetchMessages, handleError, t],
  );

  return (
    <StyledMessagesBox.Container>
      <StyledMessagesBox.Header>
        <NextLink passHref href='/'>
          <StyledMessagesBox.BackIconWrapper title={t('conversation.header.backButton.title')}>
            <HiOutlineArrowLeft size='1.75rem' />
          </StyledMessagesBox.BackIconWrapper>
        </NextLink>
        <StyledMessagesBox.Name>{nickname}</StyledMessagesBox.Name>
        <StyledMessagesBox.Info
          title={t('conversation.header.lastMessageTimestamp.title', {
            date: formatDate(timestampToDate(lastMessageTimestamp), locale),
          })}
        >
          {t('conversation.header.lastMessageTimestamp.text', {
            date: formatRelativeDate(timestampToDate(lastMessageTimestamp), locale),
          })}
        </StyledMessagesBox.Info>
      </StyledMessagesBox.Header>

      <StyledMessagesBox.Inner>
        {!loading && sortedMessages
          ? sortedMessages?.map((message, index) => {
              const alignment = id === message.authorId ? 'left' : 'right';
              const position = getMessagePosition(sortedMessages, index);
              return (
                <StyledMessagesBox.ChatItem
                  title={formatDate(timestampToDate(message.timestamp), locale)}
                  $isFirstMessage={index === 0}
                  $position={position}
                  $align={alignment}
                  key={message.id}
                >
                  <ChatBubble position={position} align={alignment}>
                    {message.body}
                  </ChatBubble>
                  {['single', 'last'].includes(position) ? (
                    <StyledMessagesBox.ChatItemDate>
                      {formatDate(timestampToDate(message.timestamp), locale)}
                    </StyledMessagesBox.ChatItemDate>
                  ) : null}
                </StyledMessagesBox.ChatItem>
              );
            })
          : null}
        {!loading && (!sortedMessages || sortedMessages.length === 0) ? (
          <InfoBox>{t('conversation.emptyText', { name: nickname })}</InfoBox>
        ) : null}
        <div ref={messagesEndRef} />
      </StyledMessagesBox.Inner>

      <StyledMessagesBox.Footer>
        <MessageForm onChange={onChange} value={value} onSubmit={onSubmit} />
      </StyledMessagesBox.Footer>
    </StyledMessagesBox.Container>
  );
};

export default MessagesBox;
