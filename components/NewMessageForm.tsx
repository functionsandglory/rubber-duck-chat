import {FC, useState, useEffect} from 'react';
import {Grid, IconButton} from '@mui/material';
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
                    onChange={handleOnChange}
                />
            </Grid>
            <Grid
                item
                xs={'auto'}
            >
                <IconButton
                    color={"secondary"}
                    size={"large"}
                    onClick={handleClick}
                    disabled={awaitingResponse || cantSend()}
                    sx={{
                        mb: '3px',
                    }}
                >
                    <Send/>
                </IconButton>
            </Grid>
        </Grid>
    )
};

export default NewMessageForm;