import CloseIcon from '@mui/icons-material/Close';
import { Dialog } from '@mui/material';
import GVIconButton from '../common/GVIconButton';
import Text from '../common/Text';
import RegisterForm from './RegisterForm';
import styles from './styles/RegisterDialog.module.scss';

interface IRegisterDialogProps {
    onClose: () => void;
    open: boolean;
}

const RegisterDialog = ({ onClose, open }: IRegisterDialogProps) => {
    return (
        <Dialog onClose={onClose} open={open}>
            <div className={styles.dialogDiv}>
                <div className={styles.dialogHeaderDiv}>
                    <Text variant="h1" className={styles.dialogHeaderText}>
                        Register new account
                    </Text>
                    <GVIconButton onClick={onClose}>
                        <CloseIcon />
                    </GVIconButton>
                </div>
                <RegisterForm handleClose={onClose} />
            </div>
        </Dialog>
    );
};

export default RegisterDialog;
