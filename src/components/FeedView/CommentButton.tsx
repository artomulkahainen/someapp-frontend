import { Button } from '@mui/material';
import styled from 'styled-components';
import { Colors } from '../../utils/styles/colors';

const StyledButton = styled(Button)`
    width: 50%;
    height: 5em;

    &.css-1e6y48t-MuiButtonBase-root-MuiButton-root {
        border-radius: 0;
        color: ${Colors.mainRed};
        border-right: 1px solid #000000;
    }
`;

interface ICommentButtonProps {
    commentsCount: number;
    onClick: () => void;
}

const CommentButton = ({ commentsCount, onClick }: ICommentButtonProps) => {
    return (
        <StyledButton onClick={onClick}>
            {`Comments (${commentsCount})`}
        </StyledButton>
    );
};

export default CommentButton;
