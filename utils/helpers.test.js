const { expect } = require('@jest/globals');

const { average } = require('./helpers');

test('should return average of reviews array', () => {
  const input = [
    { id: 1, score: 5 },
    { id: 2, score: 5 },
    { id: 3, score: 2 },
    { id: 4, score: 2 },
    { id: 5, score: 2 },
    { id: 6, score: 5 },
  ];
  const result = average(input);

  expect(result).toBe(3.5);
});

test('should return average of reviews array regular case', () => {
  const input = [
    { id: 1, score: 1 },
    { id: 2, score: 1 },
    { id: 3, score: 1 },
    { id: 4, score: 1 },
    { id: 5, score: 1 },
    { id: 6, score: 5 },
  ];
  const result = average(input);

  expect(result).toBe(1.6666666666666667);
});

test('should return average of reviews array plane case', () => {
  const input = [
    { id: 1, score: 1 },
    { id: 2, score: 2 },
    { id: 3, score: 4 },
    { id: 4, score: 4 },
    { id: 5, score: 5 },
    { id: 6, score: 3 },
  ];
  const result = average(input);

  expect(result).toBe(3.1666666666666665);
});
