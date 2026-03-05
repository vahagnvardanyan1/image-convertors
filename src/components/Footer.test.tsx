import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

jest.mock('./Footer.css', () => ({})); // Mock styles

describe('Footer Component', () => {
  test('it should render the footer and contain relevant text', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();

    const footerText = screen.getByText(/© 2023 MyCompany. All rights reserved./i);
    expect(footerText).toBeInTheDocument();
  });

  test('it should have links with correct hrefs', () => {
    render(<Footer />);
    const privacyLink = screen.getByRole('link', { name: /privacy policy/i });
    const termsLink = screen.getByRole('link', { name: /terms of service/i });

    expect(privacyLink).toHaveAttribute('href', '/privacy');
    expect(termsLink).toHaveAttribute('href', '/terms');
  });

  test('it should match the styles with header', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');

    expect(footerElement).toHaveStyle('background-color: #f8f9fa');
    expect(footerElement).toHaveStyle('border-top: 1px solid #eaeaea');
  });
});
