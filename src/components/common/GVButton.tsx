import { Button } from '@mui/material';
import { CSSProperties } from 'react';

interface IGVButtonProps {
    children: string | JSX.Element;
    onClick?: () => void;
    style?: CSSProperties;
    type?: 'primary' | 'secondary';
}

const GVButton = ({ children, onClick, style, type }: IGVButtonProps) => {
    return (
        <Button
            color={type || 'primary'}
            onClick={onClick}
            variant="contained"
            style={{ ...style }}>
            {children}
        </Button>
    );
};

export default GVButton;
