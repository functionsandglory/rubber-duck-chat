import {FC, useState} from 'react';
import {Box, IconButton} from '@mui/material';
import {Send} from '@mui/icons-material';
import MessageTextArea from './MessageTextArea';
import useMessages from '../hooks/use-messages';
import {MessageType} from '../store/messages-slice';

const NewMessageForm: FC = () => {
    const [message, setMessage] = useState<string>('');
    const {addMessage} = useMessages();

    const handleClick = () => {
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
            alignItems: 'flex-end',
            p: 2,
        }}>
            <Box sx={{
                flex: 1,
                mr: 1,
            }}>
                <MessageTextArea
                    value={message}
                    onChange={handleOnChange}
                />
            </Box>
            <Box>
                <IconButton
                    color={"secondary"}
                    size={"large"}
                    onClick={handleClick}
                >
                    <Send/>
                </IconButton>
            </Box>
        </Box>
    )
};

export default NewMessageForm;