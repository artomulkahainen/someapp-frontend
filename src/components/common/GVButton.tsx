import LoadingButton from '@mui/lab/LoadingButton';
import { CSSProperties } from 'react';

interface IGVButtonProps {
    children: string | JSX.Element;
    loading?: boolean;
    onClick?: () => void;
    style?: CSSProperties;
    colorType?: 'primary' | 'secondary';
    type?: 'submit';
}

const GVButton = ({
    children,
    loading,
    onClick,
    style,
    colorType,
    type,
}: IGVButtonProps) => {
    return (
        <LoadingButton
            color={colorType || 'primary'}
            loading={loading ?? false}
            onClick={onClick}
            variant="contained"
            style={{ ...style }}
            type={type || 'button'}>
            {children}
        </LoadingButton>
    );
};

export default GVButton;
