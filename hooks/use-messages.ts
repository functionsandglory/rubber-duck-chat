import store, { RootState, useAppDispatch} from '../store/store'
import { useSelector } from 'react-redux'
import {addMessage, NewMessage, messagesAdapter} from '../store/messages-slice';

const useMessages = () => {
    const dispatch = useAppDispatch();
    const selectors = messagesAdapter.getSelectors<RootState>((state) => state.messages);

    return {
        messages: useSelector(selectors.selectAll),
        addMessage: (newMessage: NewMessage) => dispatch(addMessage(newMessage)),
    };
};

export default useMessages;