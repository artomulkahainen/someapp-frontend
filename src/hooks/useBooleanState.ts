import { useState } from 'react';

/**
 *
 * This needs tests
 */

const useBooleanState = (initialState?: boolean) => {
    const [booleanState, setBooleanState] = useState(initialState ?? false);

    const toggleBooleanState = () => setBooleanState(!booleanState);

    return [booleanState, toggleBooleanState] as [
        booleanState: boolean,
        toggleBooleanState: () => void,
    ];
};

export default useBooleanState;
