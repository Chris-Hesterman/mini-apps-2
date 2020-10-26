const squareReducer = (state = { number: 0 }, action) => {
  if (action.type === 'SQUARE_CLICKED') {
    console.log(action);
    return { number: action.number };
  }
  return state;
};

export default squareReducer;
