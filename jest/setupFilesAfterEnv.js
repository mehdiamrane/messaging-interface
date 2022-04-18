import '@testing-library/jest-dom/extend-expect';

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));
