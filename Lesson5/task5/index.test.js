import { getSum } from './index'

it('should get sum', () => {
  let result = getSum(2, 10);
  expect(result).toEqual(30);
});

it('should get sum', () => {
  let result = getSum(2, 20);
  expect(result).toEqual(110);
});

it('should get sum', () => {
  let result = getSum(3, 15);
  expect(result).toEqual(54);
});
