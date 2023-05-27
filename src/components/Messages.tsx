import React, {FC} from 'react';
import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';
import TypingIndicator from './TypingIndicator';
import {MessageType} from '../store/messages-slice';
import useMessages from '../hooks/use-messages';

const Messages: FC = () => {
    const {
        messages,
        isTyping,
    } = useMessages();
    
    return (
        <React.Fragment>
            {
                messages.map((message) => {
                    return message.type == MessageType.SENT
                        ? <SentMessage key={message.id} message={message} />
                        : <ReceivedMessage key={message.id} message={message} />
                })
            }
            {
                isTyping && <TypingIndicator/>
            }
        </React.Fragment>
    )
};

export default Messages;