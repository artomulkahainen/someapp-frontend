import { TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';

interface IGVTextFieldProps {
    label: string;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    type?: 'password';
    value?: string;
}
const GVTextField = ({ onChange, label, type, value }: IGVTextFieldProps) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            variant="standard"
            type={type}
        />
    );
};

export default GVTextField;
