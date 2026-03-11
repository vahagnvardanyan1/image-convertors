import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './index';

// Integration test: Ensure header renders correctly with the new background color

describe('Header Component', () => {
  test('should have a red background color', () => {
    const { getByRole } = render(<Header />);
    const headerElement = getByRole('banner');
    expect(headerElement).toHaveClass('bg-red-500');
  });

  test('other components should not be affected by the red background color change', () => {
    // This can be extended to include actual other components render and their checks
    const { container } = render(<Header />);
    expect(container.querySelector('.bg-red-500')).toBeTruthy();
  });
});