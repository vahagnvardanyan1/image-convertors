import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../../src/components/Header';

// Test to ensure the header's background color

describe('Header Component', () => {
  test('renders with the correct background color', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('bg-blue-500', 'border-b', 'border-gray-100');
  });

  // Test for cross-browser compatibility - done manually
});
