import useWindowSize from './useWindowSize';

const useSmallWindow = (widthProp: number) => {
    const { width } = useWindowSize();

    const isSmallWindow = width <= widthProp;

    return { isSmallWindow };
};

export default useSmallWindow;
