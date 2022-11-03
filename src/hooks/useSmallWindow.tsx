import useWindowSize from './useWindowSize';

const useSmallWindow = (widthProp: number) => {
    const { width } = useWindowSize();

    const isSmallWindow = () => widthProp <= width;
    return { isSmallWindow };
};

export default useSmallWindow;
