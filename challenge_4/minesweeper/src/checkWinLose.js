export const checkWin = (uncovered, mines) => {
  if (uncovered === 100 - mines) {
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
