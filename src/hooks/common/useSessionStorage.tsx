const useSessionStorage = () => {
    const getItem = (key: string) => sessionStorage.getItem(key);
    const setItem = (key: string, value: string) =>
        sessionStorage.setItem(key, value);
    const removeItem = (key: string) => sessionStorage.removeItem(key);

    return {
        getItem,
        setItem,
        removeItem,
    };
};

export default useSessionStorage;
