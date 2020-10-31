import checkAdjacent from './utils/checkAdjacent.js';
import { checkWin, checkLose } from './utils/checkWinLose.js';
import { uncoverEntireBonus } from './utils/uncoverEntireBonus.js';

test('checkAdjacent', () => {
  const result = checkAdjacent(43, [34, 29, 22, 44, 45, 67]);
  const result2 = checkAdjacent(20, [21, 11, 10, 29, 30]);

  expect(result).toBe(2);
  expect(result).not.toBe(3);
  expect(result2).toBe(3);
  expect(result2).not.toBe(5);
});

test('checkWin', () => {
  const uncovered = new Set([1, 2, 4, 5, 7, 6, 8, 10]);
  const mines = [45, 12, 7, 4, 2];
  const result = checkWin(uncovered, mines);
  const uncoveredArr = [...Array(96).keys()].slice(1);
  const uncovered2 = new Set(uncoveredArr);
  const result2 = checkWin(uncovered2, mines);

  expect(result).toBe(false);
  expect(result2).toBe(true);
});

test('checkLose', () => {
  const mines = [45, 12, 7, 4, 2];
  const flags1 = [1, 4];
  const flags2 = [6, 5];
  const result = checkLose(4, mines, flags1);
  const result2 = checkLose(4, mines, flags2);

  expect(result).toBe(false);
  expect(result2).toBe(true);
});

test('uncoverEntireBonus', () => {
  const uncovered = [1];
  const mines = [4, 14, 24, 34, 33, 32, 31];
  const result = uncoverEntireBonus(1, uncovered, mines);

  expect(result).toHaveProperty('size', 8);
});
