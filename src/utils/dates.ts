import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import intlFormat from 'date-fns/intlFormat';
import { enUS, fr } from 'date-fns/locale';

const localeMapping = { 'en-US': enUS, fr };

export const formatRelativeDate = (date: Date, locale: string): string =>
  formatDistanceToNow(date, { locale: localeMapping[locale], addSuffix: true });

export const formatDate = (date: Date, locale: string): string =>
  intlFormat(
    date,
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    },
    {
      locale,
    },
  );

export const timestampToDate = (timestamp: number): Date => new Date(timestamp * 1000);
