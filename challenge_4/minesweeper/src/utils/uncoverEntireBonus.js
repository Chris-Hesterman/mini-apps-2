import checkAdjacent from './checkAdjacent';

export const uncoverEntireBonus = (number, uncoveredSquares, minesArray) => {
  let fullBonus = [];

  const helper = (num) => {
    let arr = buildAdjacent(num, uncoveredSquares, fullBonus);

    fullBonus = fullBonus.concat(arr);
    arr = arr.forEach((number) => {
      if (checkAdjacent(number, minesArray) === 0) {
        helper(number);
      }
    });
  };
  helper(number);

  return new Set(fullBonus);
};

export const buildAdjacent = (num, uncovered, bonus) => {
  let adjArray = [num - 10, num + 10];

  if (num % 10 !== 0 && num % 10 !== 1) {
    adjArray.push(num - 1, num + 1, num - 9, num + 9, num - 11, num + 11);
  }

  if (num % 10 === 1) {
    adjArray.push(num + 1, num - 9, num + 11);
  }

  if (num % 10 === 0) {
    adjArray.push(num + 9, num - 1, num - 11);
  }

  adjArray = adjArray.filter((number) => {
    if (uncovered.length) {
      if (
        number > 0 &&
        number < 101 &&
        uncovered.indexOf(number) === -1 &&
        !bonus.includes(number)
      ) {
        return number;
      }
    } else {
      if (number > 0 && number < 101) {
        return number;
      }
    }
  });

  return adjArray;
};
