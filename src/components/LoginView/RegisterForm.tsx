import useBooleanState from '../../hooks/useBooleanState';
import { saveNewUser } from '../../services/userService';
import GVButton from '../common/GVButton';
import GVTextField from '../common/GVTextField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

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

const StyledError = styled.p`
    font-size: 0.7em;
    color: red;
`;

interface IRegisterFormProps {
    handleClose: () => void;
}

const RegisterForm = ({ handleClose }: IRegisterFormProps) => {
    const [loading, toggleLoading] = useBooleanState();

    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={async (values) => {
                toggleLoading();
                try {
                    await saveNewUser(values.username, values.password);
                } catch (e) {
                    console.error((e as Error).message);
                } finally {
                    toggleLoading();
                    handleClose();
                }
            }}>
            {({ errors, touched, values, handleChange }) => (
                <Form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <GVTextField
                        name="username"
                        label="Username"
                        onChange={handleChange}
                        value={values.username}
                    />
                    {errors.username && touched.username && (
                        <StyledError>{errors.username}</StyledError>
                    )}
                    <GVTextField
                        name="password"
                        label="Password"
                        type="password"
                        onChange={handleChange}
                        value={values.password}
                    />
                    {errors.password && touched.password && (
                        <StyledError>{errors.password}</StyledError>
                    )}
                    <GVButton
                        style={{ margin: '1em 0em' }}
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
