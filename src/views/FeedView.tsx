import GVButton from '../components/common/GVButton';
import useAuthentication from '../hooks/common/useAuthentication';
import BaseView from './BaseView';

const FeedView = ({ toggleLoggedIn }: { toggleLoggedIn: () => void }) => {
    const { onLogout } = useAuthentication(toggleLoggedIn);
    return (
        <BaseView>
            <p>Feed</p>
            <GVButton onClick={onLogout}>Logout</GVButton>
        </BaseView>
    );
};

export default FeedView;
