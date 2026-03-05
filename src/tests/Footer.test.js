import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Footer } from '../components/Footer';

describe('Footer Component', () => {
  test('renders all sections with correct background color', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-gray-900');
  });

  test('renders correct text content', () => {
    render(<Footer />);
    expect(screen.getByText(/your company/i)).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
