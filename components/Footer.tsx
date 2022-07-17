import type {FC} from 'react';
import {Box} from '@mui/material';
import MessageTextArea from "./MessageTextArea";

const Footer: FC = () => (
    <Box sx={{
        width: '100%',
        display: 'flex',
        p: 2,
    }}>
       <MessageTextArea />
    </Box>

);

export default Footer;