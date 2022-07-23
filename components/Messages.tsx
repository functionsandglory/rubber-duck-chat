import React, {FC} from "react";
import SentMessage from "./SentMessage";
import useMessages from "../hooks/use-messages";

const Messages: FC = () => {
    const {messages} = useMessages();
    return (
        <React.Fragment>
            {
                messages.map((message) => (
                    <SentMessage key={message.id} message={message.message} />
                ))
            }
        </React.Fragment>
    )
};

export default Messages;