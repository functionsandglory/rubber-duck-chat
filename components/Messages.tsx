import React, {FC} from "react";
import Message from './Message';
import useMessages from "../hooks/use-messages";

const Messages: FC = () => {
    const {messages} = useMessages();

    return (
        <React.Fragment>
            {
                messages.map((message) => (
                    <Message
                        key={message.id}
                        message={message.message}
                        type={message.type}
                    />
                ))
            }
        </React.Fragment>
    )
};

export default Messages;