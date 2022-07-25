import {FC} from 'react';
import {Box, Typography} from "@mui/material";
import {MessageType} from "../store/messages-slice";
import {lightBlue} from "@mui/material/colors";

type Props = {
    message: string,
    type: MessageType,
};

const Message: FC<Props> = ({message, type}) => {
    const isSent = type === MessageType.SENT;
    const isReceived = !isSent;

    return (
        <Box sx={{
            mb: 2,
            p: 1,
            width: '300px',
            ml: isSent ? 'auto' : 0,
            mr: isReceived ? 'auto' : 0,
            backgroundColor: (theme) => isSent ? lightBlue[100] : theme.palette.primary.main,
            borderRadius: (theme) => theme.spacing(1)
        }}>
            <Typography>{message}</Typography>
        </Box>
    )
};

export default Message;