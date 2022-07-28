import {FC} from 'react';
import {Typography} from "@mui/material";

const SendingIndicator:FC = () => {
    return (
        <Typography
            color={'text.secondary'}
            textAlign={'right'}
        >
            Sending...
        </Typography>
    )
};

export default SendingIndicator;