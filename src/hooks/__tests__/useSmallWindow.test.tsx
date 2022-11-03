import { renderHook } from '@testing-library/react';
import useSmallWindow from '../useSmallWindow';

const customGlobal = global as any;

describe('useSmallWindow tests', () => {
    it('isSmallWindow is true', () => {
        customGlobal.innerWidth = 500;
        customGlobal.innerHeight = 800;

        const { result } = renderHook(() => useSmallWindow(768));

        expect(result.current.isSmallWindow).toBe(true);
    });

    it('isSmallWindow is false', () => {
        customGlobal.innerWidth = 1500;
        customGlobal.innerHeight = 800;
        const { result } = renderHook(() => useSmallWindow(768));

        expect(result.current.isSmallWindow).toBe(false);
    });
});
