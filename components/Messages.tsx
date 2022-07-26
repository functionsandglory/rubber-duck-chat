import React, {FC} from 'react';
import {MessageType} from '../store/messages-slice';
import useMessages from '../hooks/use-messages';
import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';

const Messages: FC = () => {
    const {messages} = useMessages();
    
    return (
        <React.Fragment>
            {
                messages.map((message) => {
                    return message.type == MessageType.SENT
                        ? <SentMessage key={message.id} message={message} />
                        : <ReceivedMessage key={message.id} message={message} />
                })
            }
        </React.Fragment>
    )
};

export default Messages;