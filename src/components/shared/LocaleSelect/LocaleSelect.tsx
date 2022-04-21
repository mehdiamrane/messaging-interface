import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { StyledLocaleSelect } from './LocaleSelect.style';
import { useTranslation } from 'next-i18next';

const LocaleSelect: FC = () => {
  const { t } = useTranslation('common');

  const router = useRouter();

  const handleLocaleChange = (event: { target: { value: string } }) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <StyledLocaleSelect title={t('footer.locale.title')} onChange={handleLocaleChange} value={router.locale}>
      <option value='en-US'>{t('footer.locale.en-US')}</option>
      <option value='fr'>{t('footer.locale.fr')}</option>
    </StyledLocaleSelect>
  );
};

export default LocaleSelect;
