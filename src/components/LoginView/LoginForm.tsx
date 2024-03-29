import { Form, Formik } from 'formik';
import useLoginView from '../../hooks/common/useAuthentication';
import FormError from '../common/FormError';
import GVButton from '../common/GVButton';
import GVTextField from '../common/GVTextField';
import { ILoginViewFormValues } from './loginView.interfaces';
import styles from './styles/LoginView.module.scss';

const LoginForm = () => {
    const { initialFormValues, loading, onLogin, userNamePasswordSchema } =
        useLoginView();

    const onSubmit = async (values: ILoginViewFormValues) => {
        try {
            await onLogin(values);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Formik
            initialValues={initialFormValues}
            validationSchema={userNamePasswordSchema}
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
                        Login
                    </GVButton>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
