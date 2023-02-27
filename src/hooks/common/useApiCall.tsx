const useApiCall = () => {
    const call = async <T,>(functionToCall: () => T) => {
        try {
            // TODO: send success alert to redux
            return await functionToCall();
        } catch (e) {
            // TODO: Send error alert to redux
            console.error(e);
            throw new Error((e as Error).message);
        }
    };

    const callWithParam = async <T, V>(
        functionToCall: (param: V) => T,
        param: V,
    ) => {
        try {
            // TODO: send success alert to redux
            return await functionToCall(param);
        } catch (e) {
            // TODO: Send error alert to redux
            console.error(e);
            throw new Error((e as Error).message);
        }
    };

    const callWithTwoParams = async <T, V, Y>(
        functionToCall: (param: V, secondParam: Y) => T,
        firstParam: V,
        secondParam: Y,
    ) => {
        try {
            // TODO: send success alert to redux
            return await functionToCall(firstParam, secondParam);
        } catch (e) {
            // TODO: Send error alert to redux
            console.error(e);
            throw new Error((e as Error).message);
        }
    };

    return { call, callWithParam, callWithTwoParams };
};

export default useApiCall;
