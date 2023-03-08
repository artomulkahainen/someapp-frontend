import { Dialog } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deletePostCommentThunk,
    sendPostCommentThunk,
} from '../../store/postsSlice';
import { selectPosts } from '../../store/selectors';
import { AppDispatch } from '../../store/store';
import GVButton from '../common/GVButton';
import GVTextField from '../common/GVTextField';
import Text from '../common/Text';
import ExistingPostComment from './ExistingPostComment';
import styles from './styles/PostCommentDialog.module.scss';

interface IPostCommentDialogProps {
    onClose: () => void;
    postId?: string;
}

const PostCommentDialog = ({ onClose, postId }: IPostCommentDialogProps) => {
    const [loading, setLoading] = useState(false);
    const [postComment, setPostComment] = useState('');

    const dispatch: AppDispatch = useDispatch();

    const existingComments = useSelector(selectPosts).posts.find(
        (post) => post.uuid === postId,
    )?.postComments;

    const sendComment = async () => {
        if (postId) {
            setLoading(true);
            try {
                await dispatch(sendPostCommentThunk({ postComment, postId }));
            } catch (e) {
                console.error(e);
            }
            setPostComment('');
            setLoading(false);
        }
    };

    const deleteComment = async (id: string) => {
        if (postId) {
            setLoading(true);
            try {
                await dispatch(deletePostCommentThunk({ uuid: id }));
            } catch (e) {
                console.error(e);
            }
            setLoading(false);
        }
    };

    return (
        <Dialog open={!!postId} onClose={onClose}>
            <div className={styles.dialogDiv}>
                {existingComments && existingComments.length > 0 ? (
                    [...existingComments]
                        .sort((a, b) =>
                            Number(
                                dayjs(a.createdDate).isBefore(
                                    dayjs(b.createdDate),
                                ),
                            ),
                        )
                        .map((comment) => (
                            <ExistingPostComment
                                key={comment.uuid}
                                comment={comment}
                                deleteComment={deleteComment}
                            />
                        ))
                ) : (
                    <Text>No comments yet!</Text>
                )}
                <div className={styles.commentSendingDiv}>
                    <GVTextField
                        label="Your comment"
                        className={styles.commentInput}
                        value={postComment}
                        onChange={(event) => setPostComment(event.target.value)}
                    />
                    <GVButton
                        disabled={postComment.length === 0}
                        primary
                        loading={loading}
                        onClick={sendComment}>
                        Send
                    </GVButton>
                </div>
            </div>
        </Dialog>
    );
};

export default PostCommentDialog;
