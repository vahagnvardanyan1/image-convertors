import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../src/components/Header'; // Adjust the path as necessary

// Accessibility testing
const testCases = [
  { title: 'Desktop view', width: 1024, height: 768 },
  { title: 'Mobile view', width: 375, height: 812 }
];

testCases.forEach(({ title, width, height }) => {
  describe(`Header Color Change - ${title}`, () => {
    beforeEach(() => {
      global.innerWidth = width;
      global.innerHeight = height;
      global.dispatchEvent(new Event('resize'));
    });

    it('should render the header with the correct color', () => {
      render(<Header />);
      const headerElement = screen.getByRole('banner');
      expect(headerElement).toHaveStyle('background-color: #expectedColor'); // Replace #expectedColor with actual value
    });

    it('should meet accessibility contrast requirements', () => {
      render(<Header />);
      const headerElement = screen.getByRole('banner');
      // Assume a function 'meetsContrastRequirements' is defined elsewhere
      expect(meetsContrastRequirements(headerElement)).toBe(true);
    });
  });
});