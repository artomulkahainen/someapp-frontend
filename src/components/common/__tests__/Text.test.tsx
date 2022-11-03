import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Text from '../Text';

const customGlobal = global as any;

describe('Text component tests', () => {
    beforeEach(() => {
        act(() => {
            customGlobal.innerWidth = 1000;
            customGlobal.innerHeight = 1000;

            fireEvent(customGlobal, new Event('resize'));
        });
    });

    it('h1 variant', () => {
        render(<Text variant="h1">Nice</Text>);
        const text = screen.getByText(/Nice/i);
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('font-size: 2em;');
    });

    it('h1 variant mobile', () => {
        act(() => {
            customGlobal.innerWidth = 500;
            customGlobal.innerHeight = 1000;

            fireEvent(customGlobal, new Event('resize'));
        });

        render(<Text variant="h1">Nice</Text>);
        const text = screen.getByText(/Nice/i);
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('font-size: 1.5em;');
    });

    it('h2 variant', () => {
        render(<Text variant="h2">Nice</Text>);
        const text = screen.getByText(/Nice/i);
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('font-size: 1.5em;');
    });

    it('h2 variant mobile', () => {
        act(() => {
            customGlobal.innerWidth = 500;
            customGlobal.innerHeight = 1000;

            fireEvent(customGlobal, new Event('resize'));
        });

        render(<Text variant="h2">Nice</Text>);
        const text = screen.getByText(/Nice/i);
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('font-size: 1.2em;');
    });

    it('h3 variant', () => {
        render(<Text variant="h3">Nice</Text>);
        const text = screen.getByText(/Nice/i);
        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle('font-size: 1.3em;');
    });

    it('h3 variant mobile', () => {
        act(() => {
            customGlobal.innerWidth = 500;
            customGlobal.innerHeight = 1000;

            fireEvent(customGlobal, new Event('resize'));
        });

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
