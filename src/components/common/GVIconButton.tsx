import { IconButton } from '@mui/material';
import styled from 'styled-components';

interface IGVIconButtonProps {
    children: JSX.Element;
    onClick: () => void;
    className?: string;
}

const StyledButton = styled(IconButton)`
    min-width: 0px;
    padding: 0;
    color: black;
    align-self: center;
`;

const GVIconButton = ({ children, onClick, className }: IGVIconButtonProps) => {
    return (
        <StyledButton className={className} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default GVIconButton;
