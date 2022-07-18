import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

export enum Senders {
    USER='user',
    DUCK='duck'
}

export type Message = {
    id: string | number,
    sender: Senders,
    message: string,
    sendOn: Date,
};

const messageAdapter = createEntityAdapter<Message>();

const messageSlice = createSlice({
    name: 'messages',
    initialState: messageAdapter.getInitialState(),
    reducers: {
        addMessage: messageAdapter.addOne,
    },
})

const {reducer, actions} = messageSlice;

export const {addMessage} = actions;
export default reducer;