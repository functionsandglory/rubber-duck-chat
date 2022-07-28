import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
    EntityId,
    Dictionary
} from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid';
import {random} from 'lodash';
import eliza from "../utility/eliza";
import delay from '../utility/delay';

export type Messages = {
    entities: Dictionary<Message>,
    ids: EntityId[],
    isTyping: boolean,
    awaitingResponse: boolean,
};

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

export enum MessageType {
    SENT = 'sent',
    RECEIVED = 'received',
}

export const messagesAdapter = createEntityAdapter<Message>();
const {ids, entities} = messagesAdapter.getInitialState();

export const sendMessage = createAsyncThunk('sendMessage',
    async (newMessage: NewMessage, api) => {
        api.dispatch(receiveMessage(newMessage));
        return newMessage;
    }
);

export const receiveMessage = createAsyncThunk('receiveMessage',
    async (newMessage: NewMessage, api) => {
        await delay(random(0.5, 1) * 1000);
        await api.dispatch(typingMessage());

        return {
            message: eliza.transform(newMessage.message),
            type: MessageType.RECEIVED
        };
    }
);

export const receiveInitialMessage = createAsyncThunk('receiveInitialMessage',
    async (undefined, api) => {
        await api.dispatch(typingMessage());

        return {
            message: eliza.getInitial(),
            type: MessageType.RECEIVED
        };
    }
);

export const typingMessage = createAsyncThunk('typingMessage',
    async () => {
        await delay(random(1, 3) * 1000);
    }
);

const buildMessage = (newMessage: NewMessage): Message => {
    return {
        id: uuid(),
        sentOn: new Date().toISOString(),
        message: `${newMessage.message}`,
        type: newMessage.type,
    };
}

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        ids,
        entities,
        isTyping: false,
        awaitingResponse: false,
    } as Messages,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendMessage.fulfilled, (state, {payload}) => {
            messagesAdapter.addOne(state, buildMessage(payload));
        });

        builder.addCase(sendMessage.pending, (state) => {
            state.awaitingResponse = true;
        });

        builder.addCase(receiveMessage.fulfilled, (state, {payload}) => {
            messagesAdapter.addOne(state, buildMessage(payload));
            state.awaitingResponse = false;
        });

        builder.addCase(receiveInitialMessage.pending, (state) => {
            state.awaitingResponse = true;
        });

        builder.addCase(receiveInitialMessage.fulfilled, (state, {payload}) => {
            messagesAdapter.addOne(state, buildMessage(payload));
            state.awaitingResponse = false;
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