import GVButton from '../components/common/GVButton';
import Text from '../components/common/Text';
import LoginForm from '../components/LoginView/LoginForm';
import RegisterDialog from '../components/LoginView/RegisterDialog';
import styles from '../components/LoginView/styles/LoginView.module.scss';
import useBooleanState from '../hooks/common/useBooleanState';

const LoginView = () => {
    const [showRegisterDialog, toggleRegisterDialog] = useBooleanState();

    return (
        <div className={styles.loginViewDiv}>
            <Text variant="h1" className={styles.headerText}>
                GimmeVibe
            </Text>
            <LoginForm />
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
