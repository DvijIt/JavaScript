import { increaser } from './index'

it('should get sum', () => {
  let result = increaser(2, 10);
  expect(result).toEqual(2);
});

it('should get sum', () => {
  let result = increaser(5, 3);
  expect(result).toEqual(8);
});

it('should get sum', () => {
  let result = increaser(-5, 5);
  expect(result).toEqual(-5);
});
