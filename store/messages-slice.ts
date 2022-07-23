import {
    createSlice,
    createEntityAdapter,
    PayloadAction
} from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export enum MessageType {
    SENT = 'sent',
    RECEIVED = 'received',
}

export type Message = {
    id: string | number,
    type: MessageType,
    message: string,
    sentOn: string,
};

export type NewMessage = {
    message: string,
    type: MessageType,
};

export const messagesAdapter = createEntityAdapter<Message>();

const messageSlice = createSlice({
    name: 'messages',
    initialState: messagesAdapter.getInitialState(),
    reducers: {
        addMessage: (state, action: PayloadAction<NewMessage>) => {
            messagesAdapter.addOne(state, {
                id: uuid(),
                sentOn: new Date().toISOString(),
                message: action.payload.message,
                type: action.payload.type,
            });
        },
    },
})

const {reducer, actions} = messageSlice;
export const {addMessage} = actions;
export default reducer;