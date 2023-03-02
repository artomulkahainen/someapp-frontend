import { useEffect } from 'react';
import PostByUser from '../components/FeedView/PostByUser';
import useBooleanState from '../hooks/common/useBooleanState';
import { PostDTO } from '../services/api';
import BaseView from './BaseView';

const FeedView = () => {
    const [loading, toggleLoading] = useBooleanState();

    useEffect(() => {
        //toggleLoading();

        if (loading) {
            toggleLoading();
        }
    }, []);

    const examplePost: PostDTO = {
        uuid: '123as',
        username: 'Arto',
        post: 'Lorem ipsum upsum pumsun, halitum kalitum kalikalikaa.Lorem ipsum upsum pumsun, halitum kalitum kalikalikaa.Lorem ipsum upsum pumsun, halitum kalitum kalikalikaa.',
        userUuid: '12433536',
        createdDate: '2021-10-10',
    };

    return (
        <BaseView loading={loading}>
            <PostByUser post={examplePost} />
            <PostByUser post={examplePost} />
            <PostByUser post={examplePost} />
        </BaseView>
    );
};

export default FeedView;
