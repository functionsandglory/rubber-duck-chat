import {RootState, useAppDispatch} from '../store/store'
import {useSelector} from 'react-redux'
import {
    sendMessage,
    receiveInitialMessage,
    NewMessage,
    messagesAdapter
} from '../store/messages-slice';

const useMessages = () => {
    const dispatch = useAppDispatch();
    const selectors = messagesAdapter.getSelectors<RootState>((state) => state.messages);

    const messages = useSelector(selectors.selectAll);
    const isTyping = useSelector<RootState, boolean>((state) => state.messages.isTyping);
    const awaitingResponse = useSelector<RootState, boolean>(state => state.messages.awaitingResponse);

    return {
        messages,
        sendMessage: (newMessage: NewMessage) => dispatch(sendMessage(newMessage)),
        receiveInitialMessage: () => dispatch(receiveInitialMessage()),
        isTyping,
        awaitingResponse,
        shouldFetchInitialMessage: !!(messages.length === 0 && !awaitingResponse && !isTyping)
    };
};

export default useMessages;