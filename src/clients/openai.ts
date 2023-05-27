export type Content = string;
export type Role = 'system' | 'user' | 'assistant'

export type Message = {
    role: Role;
    content: Content;
}