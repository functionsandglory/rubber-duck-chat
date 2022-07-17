import type {FC} from 'react';
import {TextField, TextFieldProps} from '@mui/material'

const MessageTextArea: FC<TextFieldProps> = (props) => (
    <TextField multiline
               sx={{
                   width: '100%',
                   '& .MuiOutlinedInput-root': {
                       borderRadius: (theme) => theme.spacing(4),
                   },
                   '& .MuiOutlinedInput-notchedOutline': {
                       borderColor: (theme) => theme.palette.grey[500],
                       borderWidth: (theme) => '2px',
                   },
                   '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover.Mui-focused .MuiOutlinedInput-notchedOutline': {
                       borderColor: (theme) => theme.palette.grey[600],
                   },
                   '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                       borderColor: (theme) => theme.palette.grey[500],
                   },
               }}
               {...props}
    />
);

export default MessageTextArea;