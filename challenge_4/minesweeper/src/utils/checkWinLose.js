export const checkWin = (uncovered, mines) => {
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
