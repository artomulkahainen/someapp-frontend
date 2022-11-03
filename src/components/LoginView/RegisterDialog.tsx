import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog } from '@mui/material';
import styled from 'styled-components';
import Text from '../common/Text';
import RegisterForm from './RegisterForm';

interface IRegisterDialogProps {
    onClose: () => void;
    open: boolean;
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 5em;

    @media (max-width: 768px) {
        padding: 3em;
    }

    @media (max-width: 500px) {
        padding: 1em;
    }
`;

const StyledButton = styled(Button)`
    min-width: 0px;
    padding: 0;
    color: black;
    align-self: center;
`;

const RegisterDialog = ({ onClose, open }: IRegisterDialogProps) => {
    return (
        <Dialog onClose={onClose} open={open}>
            <StyledDiv>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                    <Text variant="h1" style={{ width: '80%' }}>
                        Register new account
                    </Text>
                    <StyledButton onClick={onClose}>
                        <CloseIcon />
                    </StyledButton>
                </div>
                <RegisterForm handleClose={onClose} />
            </StyledDiv>
        </Dialog>
    );
};

export default RegisterDialog;
