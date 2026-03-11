import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../src/components/Header';

// This test suite ensures that the Header component renders correctly with green background

describe('Header Component', () => {
  it('should render with a green background color', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('bg-green-500');
  });

  it('should display the header title', () => {
    render(<Header />);
    const headerTitle = screen.getByText(/Header/i);
    expect(headerTitle).toBeInTheDocument();
  });
});

// Note: Browser testing should occur separately via compatibility tools like BrowserStack or Sauce Labs, as it cannot be handled purely by this test suite.
