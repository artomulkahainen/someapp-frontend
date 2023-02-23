import { fireEvent, render, screen } from '@testing-library/react';
import Text from '../Text';

describe('Text component tests', () => {
    it('Text renders correctly', () => {
        render(<Text>Nice</Text>);
        const text = screen.getByText(/Nice/i);
        expect(text).toBeInTheDocument();
    });
});
