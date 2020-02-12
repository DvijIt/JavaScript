import {
  compareSums
} from './index'

it('should compare sum', () => {
  let result = compareSums(1, 2, 3, 4);
  expect(result).toEqual(false);
});

it('should compare sum', () => {
  let result = compareSums(4, 3, 2, 1);
  expect(result).toEqual(true);
});

it('should compare sum', () => {
  let result = compareSums(1, 5, 7, 3);
  expect(result).toEqual(false);
});