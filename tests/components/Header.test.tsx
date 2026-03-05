import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../../src/components/Header';

// Sample test suite to verify header background color

describe('Header Component', () => {
  test('should have the correct background color', () => {
    // Render Header component
    render(<Header />);
    const header = screen.getByRole('banner');

    // Check if header has the correct background color
    expect(header).toHaveStyle({ backgroundColor: 'rgb(59, 130, 246)' }); // Tailwind css: bg-blue-500
  });

  test('should render logo correctly', () => {
    // Render Header component
    render(<Header />);
    const logo = screen.getByAltText('ImageConverter Logo');

    // Check if Logo is present
    expect(logo).toBeInTheDocument();
  });

  test('should ensure interactive elements are displayed', () => {
    // Render Header component
    render(<Header />);
    const navButtons = screen.getAllByRole('button');

    // Ensure there is at least one button in the header
    expect(navButtons.length).toBeGreaterThan(0);
  });
});
