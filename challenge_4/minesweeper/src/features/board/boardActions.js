export const handleClickedSquare = (number) => {
  console.log(number);
  return {
    type: 'SQUARE_CLICKED',
    number: number
  };
};

export const handleFlaggedSquare = (number) => {
  return {
    type: 'SQUARE_FLAGGED',
    number: number
  };
};
