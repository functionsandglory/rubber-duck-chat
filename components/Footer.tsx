import {FC, useState} from 'react';
import {Box} from '@mui/material';
import MessageTextArea from "./MessageTextArea";
import useMessages from "../hooks/use-messages";
import {MessageType} from "../store/messages-slice";

const ENTER_CODE = 'Enter';

const Footer: FC = () => {
    const [message, setMessage] = useState<string>('');
    const {addMessage} = useMessages();

    const handleKeyDown = (event) => {
        if (event.code === ENTER_CODE) {
            addMessage({
                message: message,
                type: MessageType.SENT
            });
            setMessage('');
            event.preventDefault();
        }
    };

    const handleOnChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            p: 2,
        }}>
            <MessageTextArea
                value={message}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
            />
        </Box>
    )
};

export default Footer;