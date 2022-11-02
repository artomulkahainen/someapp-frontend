import { render, screen } from '@testing-library/react';
import Text from '../Text';

describe('Text component tests', () => {
    it('h1 variant', () => {
        render(<Text variant="h1">Nice</Text>);
        const text = screen.getByText(/Nice/i);
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('font-size: 1.5em;');
    });

    it('h2 variant', () => {
        render(<Text variant="h2">Nice</Text>);
        const text = screen.getByText(/Nice/i);
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('font-size: 1.2em;');
    });

    it('h3 variant', () => {
        render(<Text variant="h3">Nice</Text>);
        const text = screen.getByText(/Nice/i);
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('font-size: 1.1em;');
    });

    it('body', () => {
        render(<Text>Nice</Text>);
        const text = screen.getByText(/Nice/i);
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('font-size: 1em;');
    });
});
