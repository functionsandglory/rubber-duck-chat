import React, {FC} from 'react';
import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';
import TypingIndicator from './TypingIndicator';
import {MessageType} from '../store/messages-slice';
import useMessages from '../hooks/use-messages';
import {Alert} from "@mui/material";

const Messages: FC = () => {
    const {
        messages,
        isTyping,
        isError,
    } = useMessages();

    return (
        <React.Fragment>
            {
                messages.map((message) => {
                    return message.type == MessageType.SENT
                        ? <SentMessage key={message.id} message={message}/>
                        : <ReceivedMessage key={message.id} message={message}/>
                })
            }
            {
                isTyping && <TypingIndicator/>
            }
            {
                isError && <Alert severity="error">Something went wrong. Please try again.</Alert>
            }
        </React.Fragment>
    )
};

export default Messages;