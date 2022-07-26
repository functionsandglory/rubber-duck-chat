import {FC} from 'react';
import {Box, Typography} from '@mui/material';
import {Message, MessageType} from '../store/messages-slice';
import moment from 'moment';

type Props = {
    message: Message,
    color: string,
};

const Message: FC<Props> = ({message, color}) => {
    return (
        <Box sx={{
            display: 'inline-block',
            p: 1,
            width: '300px',
            backgroundColor: color,
            borderRadius: (theme) => theme.spacing(1)
        }}>
            <Typography>
                {message.message}
            </Typography>
            <Typography variant={'subtitle1'} textAlign={'right'}>
                {moment(message.sentOn).format('M/D/YY h:mma')}
            </Typography>
        </Box>
    )
};

export default Message;