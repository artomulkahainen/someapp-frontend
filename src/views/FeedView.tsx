import { useEffect } from 'react';
import GVButton from '../components/common/GVButton';
import useAuthentication from '../hooks/common/useAuthentication';
import useBooleanState from '../hooks/common/useBooleanState';
import BaseView from './BaseView';

const FeedView = () => {
    const { onLogout } = useAuthentication();
    const [loading, toggleLoading] = useBooleanState(true);

    useEffect(() => {
        if (!loading) {
            toggleLoading();
        }
    }, []);

    return (
        <BaseView loading={loading}>
            <p>Feed</p>
            <GVButton onClick={onLogout}>Logout</GVButton>
        </BaseView>
    );
};

export default FeedView;
