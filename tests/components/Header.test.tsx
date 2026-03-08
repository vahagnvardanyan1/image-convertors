import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '@/components/Header';

test('Header has a red background and other elements are unaffected', () => {
  render(<Header />);

  const headerElement = screen.getByRole('banner');
  expect(headerElement).toHaveClass('bg-red-500');

  const unaffectedElement = screen.getByText('ImageConverter'); // Assuming there's some text representing the logo
  expect(unaffectedElement).toHaveClass('text-gray-900'); // Ensure the text styling hasn't changed
});

// Additional tests to verify other unaffected elements
// This can include testing elements inside the header or around it, which might have been impacted by color change unexpectedly, but shouldn’t.
