import { render, screen, fireEvent } from '@testing-library/react';
import LoginPopup from './index';

describe('LoginPopup', () => {
  it('renders correctly', () => {
    render(<LoginPopup onClose={() => {}} />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('calls onClose when cancel button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<LoginPopup onClose={onCloseMock} />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('logs in with provided credentials', () => {
    render(<LoginPopup onClose={() => {}} />);
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText('Login'));
    expect(console.log).toHaveBeenCalledWith('Logging in with', 'test@example.com', 'password123');
  });
});
