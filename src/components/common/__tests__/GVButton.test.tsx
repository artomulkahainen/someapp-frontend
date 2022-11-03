import { fireEvent, render, screen } from '@testing-library/react';
import GVButton from '../GVButton';

describe('GVButtonTests', () => {
    it('button renders and onClick works', () => {
        let value = 0;
        const func = () => {
            value = 1;
        };

        render(<GVButton onClick={func}>Click</GVButton>);

        const button = screen.getByText('Click');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(value).toBe(1);
    });
});
