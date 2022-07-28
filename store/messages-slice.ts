import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid';
import delay from '../utility/delay';

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

export const sendMessage = createAsyncThunk('sendMessage',
    async (newMessage: NewMessage, api) => {
        await delay(1000);
        api.dispatch(receiveMessage(newMessage));
        return newMessage;
    }
);

export const typingMessage = createAsyncThunk('typingMessage',
    async () => {
        await delay(1000);
    }
);

export const receiveMessage = createAsyncThunk('receiveMessage',
    async (newMessage: NewMessage, api) => {
        await delay(1000);
        await api.dispatch(typingMessage());
        return {
            ...newMessage,
            type: MessageType.RECEIVED
        };
    }
);

const {ids, entities} = messagesAdapter.getInitialState();

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        ids,
        entities,
        isSending: false,
        isTyping: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendMessage.pending, (state) => {
            state.isSending = true;
        });

        builder.addCase(sendMessage.fulfilled, (state, {payload}) => {
            state.isSending = false;
            messagesAdapter.addOne(state, {
                id: uuid(),
                sentOn: new Date().toISOString(),
                message: payload.message,
                type: payload.type,
            });
        });

        builder.addCase(receiveMessage.fulfilled, (state, {payload}) => {
            messagesAdapter.addOne(state, {
                id: uuid(),
                sentOn: new Date().toISOString(),
                message: `echo: ${payload.message}`,
                type: payload.type,
            });
        });

        builder.addCase(typingMessage.pending, (state) => {
            state.isTyping = true;
        });

        builder.addCase(typingMessage.fulfilled, (state) => {
            state.isTyping = false;
        });
    }
})

const {reducer, actions} = messageSlice;
export const {} = actions;
export default reducer;