import { IconButton } from '@mui/material';
import styled from 'styled-components';

interface IGVIconButtonProps {
    children: JSX.Element;
    onClick: () => void;
}

const StyledButton = styled(IconButton)`
    min-width: 0px;
    padding: 0;
    color: black;
    align-self: center;
`;

const GVIconButton = ({ children, onClick }: IGVIconButtonProps) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default GVIconButton;
