import axios, { AxiosResponse } from 'axios';
import { User } from 'src/types/user';
import { Conversation } from 'src/types/conversation';
import { Message, MessageSent } from 'src/types/message';

const api = axios.create({
  baseURL: process.env.NEXT_API_BASE_URL,
});

// export const getUsers = (): Promise<AxiosResponse<User[]>> => api.get<User[]>('/users');

// export const getUserById = (id: User['id']): Promise<AxiosResponse<User>> =>
//   api.get<User>('/users', {
//     params: {
//       id,
//     },
//   });

export const getConversationsByUserId = (userId: User['id']): Promise<AxiosResponse<Conversation[]>> =>
  api.get<Conversation[]>('/conversations', {
    params: {
      senderId: userId,
    },
  });

export const getMessagesByConversationId = (conversationId: Conversation['id']): Promise<AxiosResponse<Message[]>> =>
  api.get<Message[]>('/messages', {
    params: {
      conversationId,
    },
  });

export const postMessage = (
  conversationId: Conversation['id'],
  message: MessageSent,
): Promise<AxiosResponse<{ id: Message['id'] }>> =>
  api.post<{ id: Message['id'] }>(`/messages/${conversationId}`, message);

export default api;
