const checkAdjacent = (currentSquare, minesArray) => {
  let numberAdjacent = 0;
  const adjacentSquares = [-9, -10, -11, -1, 1, 9, 10, 11];

  for (let square of adjacentSquares) {
    if (minesArray.includes(currentSquare + square)) {
      numberAdjacent++;
    }
  }
  if (currentSquare % 10 === 0) {
    if (minesArray.includes(currentSquare - 9)) {
      numberAdjacent--;
    }
    if (minesArray.includes(currentSquare + 1)) {
      numberAdjacent--;
    }
    if (minesArray.includes(currentSquare + 11)) {
      numberAdjacent--;
    }
  }

  if (currentSquare % 10 === 1) {
    if (minesArray.includes(currentSquare - 1)) {
      numberAdjacent--;
    }
    if (minesArray.includes(currentSquare + 9)) {
      numberAdjacent--;
    }
  }

  return numberAdjacent;
};

export default checkAdjacent;
