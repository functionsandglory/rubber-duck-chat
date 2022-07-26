import {FC} from 'react';
import {Box} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import MessageComponent from './Message';
import DuckAvatar from './DuckAvatar';
import {Message} from '../store/messages-slice'

type Props = {
    message: Message,
};

const ReceivedMessage: FC<Props> = ({message}) => {
    const theme = useTheme();
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            mb: 2,
        }}>
            <Box sx={{mr: 1}}>
                <DuckAvatar size={50}/>
            </Box>
            <MessageComponent message={message} color={theme.palette.primary.main}/>
        </Box>
    )
};

export default ReceivedMessage;