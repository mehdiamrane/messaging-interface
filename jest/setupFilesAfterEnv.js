import '@testing-library/jest-dom/extend-expect';

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});
