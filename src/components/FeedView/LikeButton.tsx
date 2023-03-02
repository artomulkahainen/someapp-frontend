import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectLoggedInUser } from '../../store/userDataSelector';
import { Colors } from '../../utils/styles/colors';

const StyledButton = styled(Button)`
    width: 50%;
    height: 5em;

    &.css-1e6y48t-MuiButtonBase-root-MuiButton-root {
        border-radius: 0;
        color: ${Colors.mainRed};
        border-left: 1px solid #000000;
    }
`;

interface ILikeButtonProps {
    likesCount: number;
    onClick: () => Promise<void>;
    postId: string;
}

const LikeButton = ({ likesCount, onClick, postId }: ILikeButtonProps) => {
    const { likedPostsIds } = useSelector(selectLoggedInUser);

    return (
        <StyledButton onClick={onClick}>{`${
            likedPostsIds?.some((dto) => dto.postId === postId)
                ? 'Unlike'
                : 'Like'
        } (${likesCount})`}</StyledButton>
    );
};

export default LikeButton;
