import Text from '../components/common/Text';
import { centeredFlexColumn } from '../utils/flexItems';

interface ILoginViewProps {
    setLoggedIn: () => void;
}

const LoginView = ({ setLoggedIn }: ILoginViewProps) => {
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
            <button onClick={setLoggedIn}>Press me</button>
        </div>
    );
};

export default LoginView;
