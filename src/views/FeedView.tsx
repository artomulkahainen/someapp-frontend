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
    const [postCommentDialogId, setPostCommentDialogId] = useState<string>();
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

    const openPostCommentDialog = (id: string) => setPostCommentDialogId(id);

    return (
        <BaseView loading={loading}>
            <>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <PostByUser
                            post={post}
                            openPostCommentDialog={openPostCommentDialog}
                        />
                    ))
                ) : (
                    <Text>No posts found!</Text>
                )}
                <PostCommentDialog
                    onClose={() => setPostCommentDialogId(undefined)}
                    id={postCommentDialogId}
                />
            </>
        </BaseView>
    );
};

export default FeedView;
