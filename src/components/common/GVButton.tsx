import LoadingButton from '@mui/lab/LoadingButton';
import { CSSProperties } from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/styles/colors';

interface IGVButtonProps {
    children: string | JSX.Element;
    className?: string;
    loading?: boolean;
    onClick?: () => void;
    style?: CSSProperties;
    primary?: true;
    type?: 'submit';
    disabled?: boolean;
}

const Button = styled(LoadingButton)<{ $primary?: boolean }>`
    background-color: ${(p) =>
        p.$primary ? Colors.mainRed : '#EEEEEE'} !important;
    color: ${(p) => (p.$primary ? 'white' : 'black')} !important;

    &.css-1twrztz-MuiButtonBase-root-MuiButton-root-MuiLoadingButton-root.Mui-disabled {
        background: #eaeaea !important;
        color: #c0c0c0 !important;
    }
`;

const GVButton = ({
    children,
    className,
    loading,
    onClick,
    style,
    primary,
    type,
    disabled,
}: IGVButtonProps) => {
    return (
        <Button
            className={className}
            $primary={primary}
            loading={loading ?? false}
            onClick={onClick}
            variant="contained"
            style={{ ...style }}
            type={type || 'button'}
            disabled={disabled || loading || false}>
            {children}
        </Button>
    );
};

export default GVButton;
