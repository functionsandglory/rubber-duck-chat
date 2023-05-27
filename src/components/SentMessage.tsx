import {FC} from 'react';
import {Box} from '@mui/material';
import Message, {Direction} from './Message';
import {Message as MessageType} from '../store/messages-slice'
import {lightBlue} from "@mui/material/colors";

type Props = {
    message: MessageType,
};

const SentMessage: FC<Props> = ({message}) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            mb: 2,
            ml: 3,
        }}
    >
        <Message
            message={message}
            color={lightBlue[100]}
            direction={Direction.RIGHT}
        />
    </Box>
);

export default SentMessage;