import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { ILoginViewFormValues } from '../../components/LoginView/loginView.interfaces';
import { loginUser, saveNewUser } from '../../services/userService';
import { clearPosts } from '../../store/postsSlice';
import { AppDispatch } from '../../store/store';
import { clearUserData, getOwnUserDataThunk } from '../../store/userDataSlice';
import useApiCall from './useApiCall';
import useSessionStorage from './useSessionStorage';

const useAuthentication = () => {
    const { setItem, removeItem } = useSessionStorage();
    const { callWithParam, callWithTwoParams } = useApiCall();
    const dispatch: AppDispatch = useDispatch();

    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        try {
            await callWithTwoParams(saveNewUser, username, password);
        } finally {
            setLoading(false);
        }
    };

    const onLogin = async (values: ILoginViewFormValues) => {
        setLoading(true);
        try {
            const response = await callWithParam(loginUser, {
                username: values.username,
                password: values.password,
            });
            setItem('token', response.token);
            // dispatch own user data to redux
            await dispatch(getOwnUserDataThunk());
        } finally {
            setLoading(false);
        }
    };

    const destroyReduxStore = () => {
        dispatch(clearUserData());
        dispatch(clearPosts());
    };

    const onLogout = () => {
        removeItem('token');
        destroyReduxStore();
    };

    return {
        initialFormValues,
        loading,
        onRegister,
        onLogin,
        onLogout,
        userNamePasswordSchema,
    };
};

export default useAuthentication;
