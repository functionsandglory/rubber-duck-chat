import {FC, useState, useEffect} from 'react';
import {Box, IconButton} from '@mui/material';
import {Send} from '@mui/icons-material';
import MessageTextArea from './MessageTextArea';
import useMessages from '../hooks/use-messages';
import {MessageType} from '../store/messages-slice';

const NewMessageForm: FC = () => {
    const [message, setMessage] = useState<string>('');
    const {sendMessage, receiveInitialMessage, awaitingResponse} = useMessages();

    useEffect(() => {
        receiveInitialMessage();
    }, []);

    const handleClick = () => {
        sendMessage({
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
            pl: 2,
            pr: 2,
            pb: 2
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
            <Box sx={{mb: '3px'}}>
                <IconButton
                    color={"secondary"}
                    size={"large"}
                    onClick={handleClick}
                    disabled={awaitingResponse}
                >
                    <Send/>
                </IconButton>
            </Box>
        </Box>
    )
};

export default NewMessageForm;