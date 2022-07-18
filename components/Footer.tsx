import type {FC} from 'react';
import {Box} from '@mui/material';
import MessageTextArea from "./MessageTextArea";

const ENTER_CODE = 'Enter';

const Footer: FC = () => {
    const handleKeyDown = (event) => {
        if (event.code === ENTER_CODE) {
            alert('send!');
        }
    };

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            p: 2,
        }}>
            <MessageTextArea onKeyDown={handleKeyDown}/>
        </Box>
    )
};

export default Footer;