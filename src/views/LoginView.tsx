import GVButton from '../components/common/GVButton';
import GVTextField from '../components/common/GVTextField';
import Text from '../components/common/Text';
import RegisterDialog from '../components/LoginView/RegisterDialog';
import useBooleanState from '../hooks/useBooleanState';
import styles from '../components/LoginView/styles/LoginView.module.scss';

interface ILoginViewProps {
    setLoggedIn: () => void;
}

const LoginView = ({ setLoggedIn }: ILoginViewProps) => {
    const [showRegisterDialog, toggleRegisterDialog] = useBooleanState();

    return (
        <div className={styles.loginViewDiv}>
            <Text variant="h1" className={styles.headerText}>
                GimmeVibe
            </Text>
            <GVTextField label="Username" />
            <GVTextField label="Password" type="password" />
            <GVButton
                primary
                onClick={setLoggedIn}
                className={styles.loginButton}>
                Login
            </GVButton>
            <GVButton
                onClick={toggleRegisterDialog}
                className={styles.registerButton}>
                Register
            </GVButton>
            <RegisterDialog
                onClose={toggleRegisterDialog}
                open={showRegisterDialog}
            />
        </div>
    );
};

export default LoginView;
