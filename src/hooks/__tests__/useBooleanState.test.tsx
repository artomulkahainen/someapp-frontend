import { fireEvent, renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useBooleanState from '../common/useBooleanState';

describe('useBooleanState tests', () => {
    it('without param', () => {
        const { result } = renderHook(() => useBooleanState());

        // using boolean state without param returns false as value
        expect(result.current[0]).toBe(false);

        // hit toggle
        act(() => {
            result.current[1]();
        });

        expect(result.current[0]).toBe(true);
    });

    it('with true param', () => {
        const { result } = renderHook(() => useBooleanState(true));

        // using boolean state without param returns false as value
        expect(result.current[0]).toBe(true);

        // hit toggle
        act(() => {
            result.current[1]();
        });

        expect(result.current[0]).toBe(false);
    });
});
