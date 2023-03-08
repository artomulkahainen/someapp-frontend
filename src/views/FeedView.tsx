import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Text from '../components/common/Text';
import PostByUser from '../components/FeedView/PostByUser';
import PostCommentDialog from '../components/FeedView/PostCommentDialog';
import { getFriendsPosts } from '../store/postsSlice';
import { selectPosts } from '../store/selectors';
import { AppDispatch } from '../store/store';
import BaseView from './BaseView';

const FeedView = () => {
    const [loading, setLoading] = useState(false);
    const dispatch: AppDispatch = useDispatch();
    const [postId, setPostId] = useState<string>();
    const { posts } = useSelector(selectPosts);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                await dispatch(getFriendsPosts());
            } catch (e) {
                console.error(e);
            }

            setLoading(false);
        })();
    }, []);

    const closePostCommentDialog = () => setPostId(undefined);

    return (
        <BaseView loading={loading}>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <PostByUser
                        key={post.uuid}
                        post={post}
                        openPostCommentDialog={setPostId}
                    />
                ))
            ) : (
                <Text>No posts found!</Text>
            )}
            <PostCommentDialog
                onClose={closePostCommentDialog}
                postId={postId}
            />
        </BaseView>
    );
};

export default FeedView;
