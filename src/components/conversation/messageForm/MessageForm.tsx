import React, { FC } from 'react';
import { StyledMessageForm } from './MessageForm.style';
import { useTranslation } from 'next-i18next';
import { HiPaperAirplane } from 'react-icons/hi';

type MessageFormProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const MessageForm: FC<MessageFormProps> = ({ onChange, value, onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <StyledMessageForm.Container onSubmit={onSubmit}>
      <StyledMessageForm.Input
        required
        value={value}
        onChange={onChange}
        minLength={1}
        placeholder={t('conversation.form.input.placeholder')}
      />
      <StyledMessageForm.Button type='submit' title={t('conversation.form.button.title')}>
        <StyledMessageForm.ButtonText>{t('conversation.form.button.label')}</StyledMessageForm.ButtonText>
        <HiPaperAirplane size='1.25rem' />
      </StyledMessageForm.Button>
    </StyledMessageForm.Container>
  );
};

export default MessageForm;
