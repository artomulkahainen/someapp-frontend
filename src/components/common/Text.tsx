import { Typography } from '@mui/material';
import { CSSProperties } from 'react';
import useSmallWindow from '../../hooks/useSmallWindow';

interface ITextProps {
    children: string;
    style?: CSSProperties;
    variant?: 'h1' | 'h2' | 'h3';
}

const Text = ({ children, style, variant }: ITextProps) => {
    const { isSmallWindow } = useSmallWindow(768);

    const preDefinedStyle: { [key: string]: CSSProperties } = {
        h1: { fontSize: !isSmallWindow ? '2em' : '1.5em' },
        h2: { fontSize: !isSmallWindow ? '1.5em' : '1.2em' },
        h3: { fontSize: !isSmallWindow ? '1.3em' : '1.1em' },
        body: { fontSize: '1em' },
    };

    return (
        <Typography
            variant={variant || 'body1'}
            style={{ ...preDefinedStyle[variant || 'body'], ...style }}>
            {children}
        </Typography>
    );
};

export default Text;
