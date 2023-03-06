import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { likePostThunk, unlikePostThunk } from '../../store/postsSlice';
import { AppDispatch } from '../../store/store';
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
    isLikedByLoggedInUser: boolean;
    likesCount: number;
    postId: string;
}

const LikeButton = ({
    likesCount,
    isLikedByLoggedInUser,
    postId,
}: ILikeButtonProps) => {
    const dispatch: AppDispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const likeOrUnlikePost = async () => {
        setLoading(true);
        if (isLikedByLoggedInUser) {
            await dispatch(unlikePostThunk({ postId }));
        } else {
            await dispatch(likePostThunk({ postId }));
        }
        setLoading(false);
    };
    return (
        <StyledButton disabled={loading} onClick={likeOrUnlikePost}>{`${
            isLikedByLoggedInUser ? 'Unlike' : 'Like'
        } (${likesCount})`}</StyledButton>
    );
};

export default LikeButton;
