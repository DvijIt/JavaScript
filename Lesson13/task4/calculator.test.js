import { calc } from './calculator.js';

it('should get sum of numbers', () => {
  const result = calc('4 + 2');
  expect(result).toEqual('4 + 2 = 6');
});

it('should get minus of numbers', () => {
  const result = calc('4 - 2');
  expect(result).toEqual('4 - 2 = 2');
});

it('should get multiply of numbers', () => {
  const result = calc('4 * 2');
  expect(result).toEqual('4 * 2 = 8');
});
it('should get division of numbers', () => {
  const result = calc('4 / 2');
  expect(result).toEqual('4 / 2 = 2');
});

