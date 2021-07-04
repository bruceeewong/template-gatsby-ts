import { sum } from '../index';

describe('sum', () => {
  test('1+1=2', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
