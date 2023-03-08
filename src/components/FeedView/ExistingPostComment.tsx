import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { PostCommentDTO } from '../../services/api';
import { selectLoggedInUser } from '../../store/selectors';
import GVIconButton from '../common/GVIconButton';
import Text from '../common/Text';
import styles from './styles/PostCommentDialog.module.scss';

interface IExistingPostComment {
    comment: PostCommentDTO;
    deleteComment: (id: string) => Promise<void>;
}

const ExistingPostComment = ({
    comment,
    deleteComment,
}: IExistingPostComment) => {
    const { uuid } = useSelector(selectLoggedInUser);

    return (
        <div className={styles.existingCommentDiv}>
            <div className={styles.existingCommentTextHeaderDiv}>
                <Text strong className={styles.existingCommentHeader}>
                    {comment.username}
                </Text>
                {comment.userId === uuid && (
                    <GVIconButton onClick={() => deleteComment(comment.uuid)}>
                        <DeleteIcon />
                    </GVIconButton>
                )}
            </div>
            <Text>{comment.postComment}</Text>
        </div>
    );
};

export default ExistingPostComment;
