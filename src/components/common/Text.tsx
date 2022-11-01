import { Typography } from '@mui/material';

interface ITextProps {
    children: string;
    variant?: 'h1' | 'h2' | 'h3';
}

const Text = ({ children, variant }: ITextProps) => {
    return <Typography variant={variant || 'body1'}>{children}</Typography>;
};

export default Text;
