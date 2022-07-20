import { RootState, useAppDispatch } from '../store/store'
import { useSelector } from 'react-redux'
import {addMessage, NewMessage} from '../store/messages-slice';

const useMessages = () => {
    const dispatch = useAppDispatch();
    return {
        messages: useSelector((state: RootState) => state.messages.entities),
        addMessage: (newMessage: NewMessage) => dispatch(addMessage(newMessage)),
    };
};

export default useMessages;