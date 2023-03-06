import { useSelector } from 'react-redux';
import { PostDTO } from '../../services/api';
import { selectLoggedInUser } from '../../store/selectors';
import Text from '../common/Text';
import CommentButton from './CommentButton';
import LikeButton from './LikeButton';

import styles from './styles/PostByUser.module.scss';

interface IPostByUser {
    openPostCommentDialog: (id: string) => void;
    post: PostDTO;
}

const PostByUser = ({ openPostCommentDialog, post }: IPostByUser) => {
    const { uuid } = useSelector(selectLoggedInUser);
    return (
        <div className={styles.mainDiv}>
            <div className={styles.postHeader}>
                <Text strong variant="h2" className={styles.usernameText}>
                    {post.username}
                </Text>
                {post.createdDate && (
                    <Text className={styles.smallText}>{post.createdDate}</Text>
                )}
            </div>
            <Text className={styles.postContent}>{post.post}</Text>
            <div className={styles.endingDiv}>
                <CommentButton
                    commentsCount={post.postComments?.length || 0}
                    onClick={() => openPostCommentDialog(post.uuid)}
                />
                <LikeButton
                    isLikedByLoggedInUser={
                        post.postLikerIds?.includes(uuid) || false
                    }
                    likesCount={post.postLikerIds?.length || 0}
                    postId={post.uuid}
                />
            </div>
        </div>
    );
};

export default PostByUser;
