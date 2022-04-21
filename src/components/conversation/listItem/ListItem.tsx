import Image from 'next/image';
import React, { FC, useMemo } from 'react';
import { StyledListItem } from './ListItem.style';
import { Conversation } from 'src/types/conversation';
import { useTranslation } from 'next-i18next';
import { getAvatarFromNickname } from 'src/utils/users';
import { getOtherUserFromConversation } from 'src/utils/conversations';
import NextLink from 'next/link';
import { formatRelativeDate, timestampToDate } from 'src/utils/dates';
import { useRouter } from 'next/router';

interface ListItemProps {
  conversation: Conversation;
}

const ListItem: FC<ListItemProps> = ({ conversation }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const { lastMessageTimestamp } = conversation;
  const formatedRelativeDate = useMemo(
    () => formatRelativeDate(timestampToDate(lastMessageTimestamp), router.locale),
    [lastMessageTimestamp, router],
  );
  const { nickname } = useMemo(() => getOtherUserFromConversation(conversation), [conversation]);
  const avatarSrc = useMemo(() => getAvatarFromNickname(nickname), [nickname]);

  const isCurrent = useMemo(() => conversation.id === Number(router?.query?.id), [conversation, router]);

  return (
    <NextLink passHref href={`/conversation/${conversation.id}`}>
      <StyledListItem.Container title={t('list.item.title', { name: nickname })} $isCurrent={isCurrent}>
        <Image src={avatarSrc} alt={t('list.item.avatar.alt', { name: nickname })} width={54} height={54} />

        <StyledListItem.TextWrapper>
          <StyledListItem.Name>{nickname}</StyledListItem.Name>
          <StyledListItem.Info>{formatedRelativeDate}</StyledListItem.Info>
        </StyledListItem.TextWrapper>
      </StyledListItem.Container>
    </NextLink>
  );
};

export default ListItem;
