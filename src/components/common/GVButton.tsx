import LoadingButton from '@mui/lab/LoadingButton';
import { CSSProperties } from 'react';
import styled from 'styled-components';

interface IGVButtonProps {
    children: string | JSX.Element;
    className?: string;
    loading?: boolean;
    onClick?: () => void;
    style?: CSSProperties;
    primary?: boolean;
    type?: 'submit';
}

const Button = styled(LoadingButton)<{ primary?: boolean }>`
    background-color: ${(p) => (p.primary ? 'red' : '#EEEEEE')} !important;
    color: ${(p) => (p.primary ? 'white' : 'black')} !important;
`;

const GVButton = ({
    children,
    className,
    loading,
    onClick,
    style,
    primary,
    type,
}: IGVButtonProps) => {
    return (
        <Button
            className={className}
            primary={primary}
            loading={loading ?? false}
            onClick={onClick}
            variant="contained"
            style={{ ...style }}
            type={type || 'button'}>
            {children}
        </Button>
    );
};

export default GVButton;
