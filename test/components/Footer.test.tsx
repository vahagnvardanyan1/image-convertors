import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '../../src/components/Footer';

describe('Footer Component', () => {
  it('should render with the correct gradient background color', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('bg-gradient-to-r from-gray-800 via-gray-900 to-black');
  });

  it('should contain the brand name', () => {
    render(<Footer />);
    const brandElement = screen.getByText('brandName');
    expect(brandElement).toBeInTheDocument();
    expect(brandElement).toBeVisible();
  });

  it('should have accessible links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAccessibleName();
    });
  });

  it('should toggle sections correctly', () => {
    render(<Footer />);
    const aiToolsButton = screen.getByText('aiTools');
    aiToolsButton.click();
    const aiToolsSection = screen.getByText('aiImageGenerator');
    expect(aiToolsSection).toBeVisible();
  });
});