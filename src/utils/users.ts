import type { User } from 'src/types/user';

// Default way to use a logged user
export const getLoggedUserId = (): User['id'] => 1;

export const isLoggedUser = (userId: User['id']): boolean => userId === getLoggedUserId();

export const getUserData = (userId: User['id'], users: User[]): User | undefined =>
  users.find(({ id }) => id === userId);

export const getAvatarFromNickname = (nickname: User['nickname']): string =>
  `https://ui-avatars.com/api/?bold=true&size=54&background=CBD5E0&rounded=true&name=${nickname}`;
