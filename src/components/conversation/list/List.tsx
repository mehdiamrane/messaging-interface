import React, { FC, useMemo } from 'react';
import { StyledList } from './List.style';
import ListItem from '../listItem/ListItem';
import { useTranslation } from 'next-i18next';

import { Conversation } from 'src/types/conversation';
import { sortConversationsByLastActive } from 'src/utils/conversations';

interface ListProps {
  conversations: Conversation[];
}

const List: FC<ListProps> = ({ conversations }) => {
  const { t } = useTranslation('common');

  const sortedConversations = useMemo(() => sortConversationsByLastActive(conversations), [conversations]);

  return (
    <StyledList.Container>
      <StyledList.Header>
        <span>{t('list.header.text')}</span>
      </StyledList.Header>
      <StyledList.Inner>
        {sortedConversations.map((conversation) => (
          <ListItem conversation={conversation} key={conversation.id} />
        ))}
      </StyledList.Inner>
    </StyledList.Container>
  );
};

export default List;
