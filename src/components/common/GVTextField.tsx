import { TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';

interface IGVTextFieldProps {
    label: string;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    type?: 'password';
    value?: string;
    name?: string;
}
const GVTextField = ({
    onChange,
    label,
    type,
    value,
    name,
}: IGVTextFieldProps) => {
    return (
        <TextField
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            variant="standard"
            type={type}
        />
    );
};

export default GVTextField;
