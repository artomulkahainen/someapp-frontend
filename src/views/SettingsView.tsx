import GVButton from '../components/common/GVButton';
import useAuthentication from '../hooks/common/useAuthentication';
import BaseView from './BaseView';

const SettingsView = () => {
    const { onLogout } = useAuthentication();

    return (
        <BaseView>
            <p>Settings</p>
            <GVButton onClick={onLogout}>Logout</GVButton>
        </BaseView>
    );
};

export default SettingsView;
