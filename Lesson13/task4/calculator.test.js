import { calc } from './calculator.js';
//plus
it('should get sum of numbers', () => {
  const result = calc('4 + 2');
  expect(result).toEqual('4 + 2 = 6');
});
//minus
it('should get minus of numbers', () => {
  const result = calc('4 - 2');
  expect(result).toEqual('4 - 2 = 2');
});
// multiply
it('should get multiply of numbers', () => {
  const result = calc('4 * 2');
  expect(result).toEqual('4 * 2 = 8');
});
//division
it('should get division of numbers', () => {
  const result = calc('4 / 2');
  expect(result).toEqual('4 / 2 = 2');
});
// <<<<<<<<<<<!!!!!!!!!>>>>>>>>>>>>>
it('should get operation of numbers', () => {
  //plus
  const result1 = calc('4 + 2');
  expect(result1).toEqual('4 + 2 = 6');
  //minus
  const result2 = calc('4 - 2');
  expect(result2).toEqual('4 - 2 = 2');
  // multiply
  const result3 = calc('4 * 2');
  expect(result3).toEqual('4 * 2 = 8');
  //division
  const result4 = calc('4 / 2');
  expect(result4).toEqual('4 / 2 = 2');
});