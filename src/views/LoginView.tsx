import GVButton from '../components/common/GVButton';
import GVTextField from '../components/common/GVTextField';
import Text from '../components/common/Text';
import useBooleanState from '../hooks/useBooleanState';
import { centeredFlexColumn } from '../utils/flexItems';

interface ILoginViewProps {
    setLoggedIn: () => void;
}

const LoginView = ({ setLoggedIn }: ILoginViewProps) => {
    const [showRegisterDialog, toggleRegisterDialog] = useBooleanState();

    return (
        <div
            style={{
                ...centeredFlexColumn,
                justifyContent: 'center',
                height: '100vh',
            }}>
            <Text variant="h1" style={{ marginBottom: '1em', color: 'red' }}>
                GimmeVibe
            </Text>
            <GVTextField label="Username" />
            <GVTextField label="Password" type="password" />
            <GVButton onClick={setLoggedIn} style={{ margin: '1em 0em' }}>
                Login
            </GVButton>
            <GVButton
                onClick={toggleRegisterDialog}
                style={{ marginTop: '5em' }}>
                Register
            </GVButton>
            {showRegisterDialog && <p>showing register dialog</p>}
        </div>
    );
};

export default LoginView;
