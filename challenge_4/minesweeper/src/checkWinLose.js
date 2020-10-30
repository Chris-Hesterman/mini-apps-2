export const checkWin = (uncovered, mines) => {
  const located = mines.every((mine) => {
    return !uncovered.has(mine);
  });
  if (uncovered.size === 100 - mines.length) {
    return true;
  }

  return false;
};

export const checkLose = (squareNum, mines, flags) => {
  if (mines.includes(squareNum) && !flags.includes(squareNum)) {
    return true;
  }
  return false;
};
