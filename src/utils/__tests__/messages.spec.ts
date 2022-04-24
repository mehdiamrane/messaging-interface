import { Message } from 'src/types/message';
import { sortMessages, getMessagePosition } from '../messages';

const dummyMessage: Message = {
  id: 1,
  conversationId: 1,
  authorId: 1,
  timestamp: Date.now(),
  body: 'Hello',
};

describe('sortMessages', () => {
  it('should sort messages', () => {
    const expected: Message[] = [
      { ...dummyMessage, id: 5, timestamp: 50 },
      { ...dummyMessage, id: 4, timestamp: 40 },
      { ...dummyMessage, id: 3, timestamp: 30 },
      { ...dummyMessage, id: 2, timestamp: 20 },
      { ...dummyMessage, id: 1, timestamp: 10 },
    ];

    const shuffledArray = expected.sort(() => 0.5 - Math.random());
    const sortedArray = sortMessages(shuffledArray);
    expect(sortedArray).toEqual(expected);
  });
});

describe('getMessagePosition', () => {
  const mesagesList: Message[] = [
    { ...dummyMessage, authorId: 1 },
    { ...dummyMessage, authorId: 2 },
    { ...dummyMessage, authorId: 2 },
    { ...dummyMessage, authorId: 2 },
  ];

  it('should return single', () => {
    const position = getMessagePosition(mesagesList, 0);
    const expected = 'single';
    expect(position).toEqual(expected);
  });

  it('should return first', () => {
    const position = getMessagePosition(mesagesList, 1);
    const expected = 'first';
    expect(position).toEqual(expected);
  });

  it('should return middle', () => {
    const position = getMessagePosition(mesagesList, 2);
    const expected = 'middle';
    expect(position).toEqual(expected);
  });

  it('should return last', () => {
    const position = getMessagePosition(mesagesList, 3);
    const expected = 'last';
    expect(position).toEqual(expected);
  });
});
