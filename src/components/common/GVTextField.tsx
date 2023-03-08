import { TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/styles/colors';

interface IGVTextFieldProps {
    label: string;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    type?: 'password';
    value?: string;
    name?: string;
    className?: string;
}

const StyledTextField = styled(TextField)`
    .css-1ptx2yq-MuiInputBase-root-MuiInput-root:after {
        border-bottom: 2px solid ${Colors.mainRed};
    }

    .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
        color: ${Colors.mainRed};
    }
`;

const GVTextField = ({
    onChange,
    label,
    type,
    value,
    name,
    className,
}: IGVTextFieldProps) => {
    return (
        <StyledTextField
            name={name}
            label={label}
            className={className}
            value={value}
            onChange={onChange}
            variant="standard"
            type={type}
        />
    );
};

export default GVTextField;
