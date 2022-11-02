import { fireEvent, renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useWindowSize from '../useWindowSize';

const customGlobal = global as any;

describe('useWindowSize tests', () => {
    beforeEach(() => {
        customGlobal.innerWidth = 500;
        customGlobal.innerHeight = 800;
    });

    it('default settings are rendered', () => {
        const { result } = renderHook(() => useWindowSize());

        expect(result.current.width).toBe(500);
        expect(result.current.height).toBe(800);
    });

    it('window size changes after resize', () => {
        const { result } = renderHook(() => useWindowSize());

        act(() => {
            customGlobal.innerWidth = 1000;
            customGlobal.innerHeight = 1000;

            fireEvent(customGlobal, new Event('resize'));
        });

        expect(result.current.width).toBe(1000);
        expect(result.current.height).toBe(1000);
    });
});
