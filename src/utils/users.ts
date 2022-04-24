import type { User } from 'src/types/user';

// Default way to use a logged user
export const getLoggedUserId = (): User['id'] => 1;

export const getAvatarFromNickname = (nickname: User['nickname']): string =>
  `https://ui-avatars.com/api/?bold=true&size=54&background=CBD5E0&rounded=true&name=${encodeURIComponent(nickname)}`;
