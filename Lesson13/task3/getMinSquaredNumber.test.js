import getMinSquaredNumber from './getMinSquaredNumber';

it('should get squared number of min number from array', () => {
  const result = getMinSquaredNumber([-2, 3, 1.2]);
  expect(result).toEqual(1.44);
});

