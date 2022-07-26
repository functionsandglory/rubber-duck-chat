import {FC, useState} from 'react';
import {Box, IconButton, Button} from '@mui/material';
import {Send} from '@mui/icons-material';
import MessageTextArea from './MessageTextArea';
import useMessages from '../hooks/use-messages';
import {MessageType} from '../store/messages-slice';

const NewMessageForm: FC = () => {
    const [message, setMessage] = useState<string>('');
    const {addMessage} = useMessages();

    const handleClick = (event) => {
        addMessage({
            message: message,
            type: MessageType.SENT
        });
        setMessage('');
    };

    const handleOnChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            p: 2,
        }}>
            <Box sx={{
                flex: 1,
                flexDirection: 'row',
                mr: 1,
            }}>
                <MessageTextArea
                    value={message}
                    onChange={handleOnChange}
                />
            </Box>
            <Button
                variant={"contained"}
                color={"secondary"}
                size={"small"}
                onClick={handleClick}
            >
                Send
            </Button>
            {/*<IconButton size={"large"}>*/}
            {/*    <Send/>*/}
            {/*</IconButton>*/}
        </Box>
    )
};

export default NewMessageForm;