import { RootState, useAppDispatch} from '../store/store'
import { useSelector } from 'react-redux'
import {
    sendMessage,
    receiveInitialMessage,
    NewMessage,
    messagesAdapter
} from '../store/messages-slice';

const useMessages = () => {
    const dispatch = useAppDispatch();
    const selectors = messagesAdapter.getSelectors<RootState>((state) => state.messages);

    return {
        messages: useSelector(selectors.selectAll),
        sendMessage: (newMessage: NewMessage) => dispatch(sendMessage(newMessage)),
        receiveInitialMessage: () => dispatch(receiveInitialMessage()),
        isTyping: useSelector<RootState, boolean>((state) => state.messages.isTyping),
        awaitingResponse: useSelector<RootState, boolean>(state => state.messages.awaitingResponse),
    };
};

export default useMessages;