import { Dialog } from '@mui/material';

interface IPostCommentDialogProps {
    onClose: () => void;
    id?: string;
}

const PostCommentDialog = ({ onClose, id }: IPostCommentDialogProps) => {
    return (
        <Dialog open={!!id} onClose={onClose}>
            <p>post id: {id}</p>
        </Dialog>
    );
};

export default PostCommentDialog;
