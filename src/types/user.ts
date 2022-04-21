export interface User {
  id: number;
  nickname: string;
  token: string;
}

export type BareUser = Omit<User, 'token'>;
