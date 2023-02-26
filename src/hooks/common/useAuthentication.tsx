import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ILoginViewFormValues } from '../../components/LoginView/loginView.interfaces';
import { loginUser, saveNewUser } from '../../services/userService';
import { RoutePaths } from '../../utils/enums';
import useApiCall from './useApiCall';
import useBooleanState from './useBooleanState';
import useSessionStorage from './useSessionStorage';

const useAuthentication = (toggleLoggedIn?: () => void) => {
    const { setItem, removeItem } = useSessionStorage();
    const { callWithParam, callWithTwoParams } = useApiCall();
    const navigate = useNavigate();

    const [loading, toggleLoading] = useBooleanState();

    const initialFormValues = { username: '', password: '' };

    const userNamePasswordSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, 'Username must be at least three characters long')
            .max(20, 'Too long username')
            .required('Username is required'),
        password: Yup.string()
            .min(3, 'Password must be at least three characters long')
            .max(50, 'Too long password')
            .required('Password is required'),
    });

    const onRegister = async (username: string, password: string) => {
        toggleLoading();
        try {
            await callWithTwoParams(saveNewUser, username, password);
        } finally {
            toggleLoading();
        }
    };

    const onLogin = async (values: ILoginViewFormValues) => {
        toggleLoading();
        try {
            const response = await callWithParam(loginUser, {
                username: values.username,
                password: values.password,
            });
            setItem('token', response.token);
            // TODO: fetch own user details and set them to redux
            toggleLoading();
            toggleLoggedIn && toggleLoggedIn();

            navigate(RoutePaths.FEED);
        } catch (e) {
            console.error(e);
            toggleLoading();
        }
    };

    const onLogout = () => {
        // TODO: destroy redux store
        removeItem('token');
        toggleLoggedIn && toggleLoggedIn();
        navigate(RoutePaths.LOGIN);
    };

    return {
        initialFormValues,
        loading,
        onRegister,
        onLogin,
        onLogout,
        toggleLoading,
        userNamePasswordSchema,
    };
};

export default useAuthentication;
