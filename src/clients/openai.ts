import wretch from 'wretch';

export type Content = string;
export type Role = 'system' | 'user' | 'assistant'

export type OpenAIMessage = {
    role: Role;
    content: Content;
}

export const getOpenAIMessage = async (contextMessages: OpenAIMessage[] = []): Promise<OpenAIMessage> => {
    const newMessage = await wretch('/api/chat').post(contextMessages).json();
    return newMessage as unknown as OpenAIMessage;
};