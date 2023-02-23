import Text from './Text';
import styles from './styles/FormError.module.scss';

interface IFormError {
    children: string;
}

const FormError = ({ children }: IFormError) => {
    return <Text className={styles.text}>{children}</Text>;
};

export default FormError;
