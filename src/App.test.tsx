import { render, screen } from '@testing-library/react';
import App from './App';

test('renders frontpage', () => {
    render(<App />);
    const linkElement = screen.getByText(/GimmeVibe/i);
    expect(linkElement).toBeInTheDocument();
});
