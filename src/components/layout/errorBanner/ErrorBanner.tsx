import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { StyledErrorBanner } from './ErrorBanner.style';
import { useTranslation } from 'next-i18next';
import { HiOutlineX } from 'react-icons/hi';

type ErrorBannerProps = {
  error: string;
  onClose: () => void;
};

const ErrorBanner: FC<ErrorBannerProps> = ({ error, onClose }) => {
  const { t } = useTranslation('common');

  return createPortal(
    <StyledErrorBanner.Container $isOpen={!!error?.length}>
      <StyledErrorBanner.Inner>
        <StyledErrorBanner.Text>{error}</StyledErrorBanner.Text>
        <StyledErrorBanner.CloseIconButton title={t('error.banner.close.title')} onClick={onClose}>
          <HiOutlineX size='2rem' />
        </StyledErrorBanner.CloseIconButton>
      </StyledErrorBanner.Inner>
    </StyledErrorBanner.Container>,
    document.body,
  );
};

export default ErrorBanner;
