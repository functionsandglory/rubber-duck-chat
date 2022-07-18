import type {FC} from 'react';
import {TextField, TextFieldProps} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import {neutralInputTheme} from "../style/theme";

const MessageTextArea: FC<TextFieldProps> = (props) => (
    <ThemeProvider theme={neutralInputTheme}>
        <TextField multiline
                   sx={{
                       width: '100%',
                       '& .MuiOutlinedInput-root': {
                           borderRadius: (theme) => theme.spacing(4),
                       },
                       '& .MuiOutlinedInput-notchedOutline': {
                           borderWidth: (theme) => '2px',
                       },
                   }}
                   {...props}
        />
    </ThemeProvider>
);

export default MessageTextArea;