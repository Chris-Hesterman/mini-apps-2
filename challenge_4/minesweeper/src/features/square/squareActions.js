const squareHasBeenClicked = (num) => {
  return {
    type: 'SQUARE_CLICKED',
    number: num
  };
};

export default squareHasBeenClicked;
