import { getLoggedUserId, getAvatarFromNickname } from '../users';

describe('getLoggedUserId', () => {
  it('should return logged user id', () => {
    const expected = 1;

    expect(getLoggedUserId()).toEqual(expected);
  });
});

describe('getAvatarFromNickname', () => {
  it('should return avatar img url', () => {
    const expected = 'https://ui-avatars.com/api/?bold=true&size=54&background=CBD5E0&rounded=true&name=Jean%20Bob';

    expect(getAvatarFromNickname('Jean Bob')).toEqual(expected);
  });
});
