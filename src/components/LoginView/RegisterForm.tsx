import { Form, Formik } from 'formik';
import useAuthentication from '../../hooks/common/useAuthentication';
import FormError from '../common/FormError';
import GVButton from '../common/GVButton';
import GVTextField from '../common/GVTextField';
import { ILoginViewFormValues } from './loginView.interfaces';
import styles from './styles/LoginView.module.scss';

interface IRegisterFormProps {
    handleClose: () => void;
}

const RegisterForm = ({ handleClose }: IRegisterFormProps) => {
    const { initialFormValues, loading, onRegister, userNamePasswordSchema } =
        useAuthentication();

    const onSubmit = async (values: ILoginViewFormValues) => {
        try {
            await onRegister(values.username, values.password);
        } finally {
            handleClose();
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
                        Register
                    </GVButton>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;
