import {FC, useState, useEffect, KeyboardEvent} from 'react';
import {Grid, IconButton} from '@mui/material';
import {Send} from '@mui/icons-material';
import MessageTextArea from './MessageTextArea';
import useMessages from '../hooks/use-messages';
import {MessageType} from '../store/messages-slice';

const NewMessageForm: FC = () => {
    const [message, setMessage] = useState<string>('');
    const {sendMessage, receiveInitialMessage, awaitingResponse, messages} = useMessages();

    useEffect(() => {
        if (messages.length < 0) {
            receiveInitialMessage();
        }

    }, [messages.length, receiveInitialMessage]);

    const handleSend = () => {
        sendMessage({
            message: message,
            type: MessageType.SENT
        });
        setMessage('');
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSend();
        }
    };

    const handleOnChange = (event) => {
        setMessage(event.target.value);
    }

    const cantSend = () => {
        return !message && message === '';
    }

    return (
        <Grid
            container
            alignItems={'flex-end'}
            sx={{
                width: '100%',
                pl: 1,
                pr: 1,
                pb: 1,
            }}
        >
            <Grid
                item
                xs
            >
                <MessageTextArea
                    value={message}
                    onKeyDown={handleKeyDown}
                    onChange={handleOnChange}
                />
            </Grid>
            <Grid
                item
                xs={'auto'}
            >
                <IconButton
                    color={"secondary"}
                    size={"medium"}
                    onClick={handleSend}
                    disabled={awaitingResponse || cantSend()}
                >
                    <Send/>
                </IconButton>
            </Grid>
        </Grid>
    )
};

export default NewMessageForm;