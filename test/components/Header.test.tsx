import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '@/components/Header';

// Test suite for Header component

describe('Header Component', () => {
  it('should render with a red background color', () => {
    render(<Header />);
    
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('bg-red-500');
  });

  it('should not affect other UI elements when background color changes', () => {
    render(<Header />);

    const logoElement = screen.getByAltText('ImageConverter Logo');
    const navElement = screen.getByRole('navigation');
    
    expect(logoElement).toBeVisible();
    expect(navElement).toBeVisible();
    expect(logoElement).toHaveClass('rounded-lg');
    expect(navElement).toHaveClass('hidden lg:flex items-center space-x-8');
  });

  // Note: integration tests must run without mocks and should cover user interactions.
});
