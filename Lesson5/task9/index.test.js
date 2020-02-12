import {
  findDivCount
} from './index'

it('should compare sum', () => {
  let result = findDivCount(2, 50, 3);
  expect(result).toEqual(16);
});

it('should compare sum', () => {
  let result = findDivCount(50, 150, 7);
  expect(result).toEqual(14);
});

it('should compare sum', () => {
  let result = findDivCount(4, 8, 9);
  expect(result).toEqual(0);
});