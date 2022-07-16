import type {FC} from 'react';
import {TextField, Box, Button} from '@mui/material';
import {Send} from '@mui/icons-material';

const Footer: FC = () => (
    <Box sx={{
        width: '100%',
        display: 'flex',
    }}>
        <TextField variant={"filled"} sx={{flex: 1, mr: 1}}/>
        <Button variant="contained" endIcon={<Send />}>
            Send
        </Button>
    </Box>

);

export default Footer;