import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './index';
import { useTranslations } from 'next-intl';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key) => key),
}));

describe('Header Component', () => {
  it('should render with the correct background color', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('bg-blue-500');
  });

  it('should not affect other components', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    const otherComponents = document.querySelectorAll('.other-component');

    otherComponents.forEach(component => {
      expect(component).not.toContain(headerElement);
      expect(component).not.toHaveClass('bg-blue-500');
    });
  });
});