import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('renders logo with correct text', () => {
    const logoElement = screen.getByText(/MyApp/i);
    expect(logoElement).toBeInTheDocument();
    expect(logoElement.closest('a')).toHaveAttribute('href', '#');
  });

  test('renders all navigation links with correct text', () => {
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    const servicesLink = screen.getByText(/Services/i);
    const contactLink = screen.getByText(/Contact/i);
    
    expect(homeLink.closest('a')).toHaveAttribute('href', '#home');
    expect(aboutLink.closest('a')).toHaveAttribute('href', '#about');
    expect(servicesLink.closest('a')).toHaveAttribute('href', '#services');
    expect(contactLink.closest('a')).toHaveAttribute('href', '#contact');
  });

  test('search bar is present', () => {
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  });

  test('responsive behavior adjusts layout on smaller screens', () => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    
    const logoElement = screen.getByText(/MyApp/i);
    const navBar = logoElement.closest('.header')?.querySelector('.nav-bar ul');
    expect(navBar).toHaveStyle('flex-direction: column');
  });

  test('search input accepts text input', () => {
    const searchInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    expect(searchInput.value).toBe('test search');
  });

  test('navigation links are clickable', () => {
    const homeLink = screen.getByText(/Home/i).closest('a');
    expect(homeLink).toBeTruthy();
    if (homeLink) {
      fireEvent.click(homeLink);
    }
  });
});