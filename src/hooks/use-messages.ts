import {RootState, useAppDispatch} from '../store/store'
import {useSelector} from 'react-redux'
import {
    sendMessage,
    receiveInitialMessage,
    NewMessage,
    messagesAdapter,
} from '../store/messages-slice';
import {copyToClipboard} from "../utility/copy-to-clipboard";

const useMessages = () => {
    const dispatch = useAppDispatch();
    const selectors = messagesAdapter.getSelectors<RootState>((state) => state.messages);

    const messages = useSelector(selectors.selectAll);
    const isTyping = useSelector<RootState, boolean>((state) => state.messages.isTyping);
    const awaitingResponse = useSelector<RootState, boolean>(state => state.messages.awaitingResponse);
    const isError = useSelector<RootState, boolean>((state) => state.messages.isError);

    const copyMessagesToClipboard = async () => {
        let messageText = messages.reduce((text, message) => {
            text += message.type === 'received' ? 'Dr. Quack:' : 'You:';
            text += '\r\n';
            text += message.message;
            text += '\r\n\r\n';
            return text;
        }, '');

        messageText = messageText.trim();
        messageText += '\r\n\r\n---\r\nhttps://rubberducktherapy.app';

       await copyToClipboard(messageText);
    }

    return {
        messages,
        sendMessage: (newMessage: NewMessage) => dispatch(sendMessage(newMessage)),
        receiveInitialMessage: () => dispatch(receiveInitialMessage()),
        isTyping,
        awaitingResponse,
        shouldFetchInitialMessage: !!(messages.length === 0 && !awaitingResponse && !isTyping),
        copyMessagesToClipboard,
        isError,
    };
};

export default useMessages;