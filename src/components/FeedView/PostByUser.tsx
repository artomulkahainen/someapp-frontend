import { PostDTO } from '../../services/api';
import Text from '../common/Text';
import CommentButton from './CommentButton';
import LikeButton from './LikeButton';

import styles from './styles/PostByUser.module.scss';

interface IPostByUser {
    post: PostDTO;
}

const PostByUser = ({ post }: IPostByUser) => {
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
                    commentsCount={0}
                    onClick={() => console.log('moi')}
                />
                <LikeButton
                    likesCount={0}
                    onClick={() => Promise.resolve()}
                    postId={post.uuid}
                />
            </div>
        </div>
    );
};

export default PostByUser;
