import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
    createAction,
    EntityId,
    Dictionary
} from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid';
import {random} from 'lodash';
import delay from '../utility/delay';
import {getOpenAIMessage, OpenAIMessage} from '../clients/openai';

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
        const formattedMessage = buildMessage(newMessage);
        api.dispatch(receiveMessage(formattedMessage));
        return formattedMessage;
    }
);

export const receiveMessage = createAsyncThunk<Message, Message, {
    state: {
        messages: Messages,
    }
}>('receiveMessage',
    async (sentMessage, api) => {
        const state = api.getState();
        const selectorAll = messagesAdapter.getSelectors<typeof state>(state => state.messages).selectAll;

        const messageHistory = selectorAll(state);
        messageHistory.push(sentMessage);

        const contextMessages: OpenAIMessage[] = messageHistory.map((message) => {
            return {
                content: message.message,
                role: message.type === 'received' ? "assistant" : "user"
            };
        });

        await delay(random(1000, 2000));
        api.dispatch(toggleTyping(true));

        const openAIMessage = await getOpenAIMessage(contextMessages);

        return buildMessage({
            message: openAIMessage.content,
            type: MessageType.RECEIVED
        })
    }
);

export const receiveInitialMessage = createAsyncThunk('receiveInitialMessage',
    async () => {
        const openAIMessage = await getOpenAIMessage();

        return {
            message: openAIMessage.content,
            type: MessageType.RECEIVED
        };
    }
);

export const toggleTyping = createAction<boolean>('toggleTyping');

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
        builder.addCase(sendMessage.pending, (state) => {
            state.awaitingResponse = true;
        });

        builder.addCase(sendMessage.fulfilled, (state, {payload}) => {
            messagesAdapter.addOne(state, buildMessage(payload));
        });

        builder.addCase(receiveMessage.fulfilled, (state, {payload}) => {
            messagesAdapter.addOne(state, payload);
            state.awaitingResponse = false;
            state.isTyping = false;
        });

        builder.addCase(receiveInitialMessage.pending, (state) => {
            state.isTyping = true;
            state.awaitingResponse = true;
        });

        builder.addCase(receiveInitialMessage.fulfilled, (state, {payload}) => {
            messagesAdapter.addOne(state, buildMessage(payload));
            state.isTyping = false;
            state.awaitingResponse = false;
        });

        builder.addCase(toggleTyping, (state, {payload}) => {
            state.isTyping = payload;
        })
    }
})

const {reducer, actions} = messageSlice;
export const {} = actions;
export default reducer;