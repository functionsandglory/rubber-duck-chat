import {FC} from 'react';
import {Box, Typography} from '@mui/material';
import moment from 'moment';
import {Message} from '../store/messages-slice';


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
            <Typography variant={'body2'} textAlign={'right'} color={'text.secondary'}>
                {moment(message.sentOn).format('M/D/YY h:mma')}
            </Typography>
        </Box>
    )
};

export default Message;