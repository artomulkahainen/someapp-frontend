import GVButton from '../components/common/GVButton';
import useAuthentication from '../hooks/common/useAuthentication';
import BaseView from './BaseView';

const FeedView = () => {
    const { onLogout } = useAuthentication();
    return (
        <BaseView>
            <p>Feed</p>
            <GVButton onClick={onLogout}>Logout</GVButton>
        </BaseView>
    );
};

export default FeedView;
