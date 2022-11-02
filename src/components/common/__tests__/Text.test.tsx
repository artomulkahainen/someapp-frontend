import { render, screen } from '@testing-library/react';
import Text from '../Text';

it('Should render text component', () => {
    render(<Text variant="h1">Nice</Text>);
    const text = screen.getByText(/Nice/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle('font-size: 1.5em;');
});
