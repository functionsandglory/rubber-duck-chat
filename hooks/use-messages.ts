import { RootState, useAppDispatch} from '../store/store'
import { useSelector } from 'react-redux'
import {sendMessage, NewMessage, messagesAdapter} from '../store/messages-slice';

const useMessages = () => {
    const dispatch = useAppDispatch();
    const selectors = messagesAdapter.getSelectors<RootState>((state) => state.messages);

    return {
        messages: useSelector(selectors.selectAll),
        addMessage: (newMessage: NewMessage) => dispatch(sendMessage(newMessage)),
        isSending: useSelector<RootState>((state) => state.messages.isSending),
        isTyping: useSelector<RootState>((state) => state.messages.isTyping),
    };
};

export default useMessages;