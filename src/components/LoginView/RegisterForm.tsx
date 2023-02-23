import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import useBooleanState from '../../hooks/useBooleanState';
import { saveNewUser } from '../../services/userService';
import FormError from '../common/FormError';
import GVButton from '../common/GVButton';
import GVTextField from '../common/GVTextField';
import styles from './styles/LoginView.module.scss';

const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Username must be at least three characters long')
        .max(20, 'Too long username')
        .required('Username is required'),
    password: Yup.string()
        .min(3, 'Password must be at least three characters long')
        .max(50, 'Too long password')
        .required('Password is required'),
});

interface IRegisterFormProps {
    handleClose: () => void;
}

interface IFormValues {
    username: string;
    password: string;
}

const RegisterForm = ({ handleClose }: IRegisterFormProps) => {
    const [loading, toggleLoading] = useBooleanState();

    const initialValues = { username: '', password: '' };

    const onSubmit = async (values: IFormValues) => {
        toggleLoading();
        try {
            await saveNewUser(values.username, values.password);
        } catch (e) {
            console.error((e as Error).message);
        } finally {
            toggleLoading();
            handleClose();
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={onSubmit}>
            {({ errors, touched, values, handleChange }) => (
                <Form className={styles.formDiv}>
                    <GVTextField
                        name="username"
                        label="Username"
                        onChange={handleChange}
                        value={values.username}
                    />
                    {errors.username && touched.username && (
                        <FormError>{errors.username}</FormError>
                    )}
                    <GVTextField
                        name="password"
                        label="Password"
                        type="password"
                        onChange={handleChange}
                        value={values.password}
                    />
                    {errors.password && touched.password && (
                        <FormError>{errors.password}</FormError>
                    )}
                    <GVButton
                        primary
                        className={styles.loginButton}
                        loading={loading}
                        type="submit">
                        Register
                    </GVButton>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;
