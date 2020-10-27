const generateState = () => {
  const initialState = {
    gameOver: false,
    mines: [],
    flags: [],
    uncovered: []
  };
  for (let i = 0; i < 10; i++) {
    let num = Math.ceil(Math.random() * 100);
    if (!initialState.mines.includes(num)) {
      initialState.mines.push(num);
    }
  }
  return initialState;
};

const boardReducer = (state = generateState(), action) => {
  let number = +action.number;
  let uncovered = [...state.uncovered];
  let flags = [...state.flags];

  if (action.type === 'SQUARE_FLAGGED' && action.number) {
    flags.push(action.number);
  }
  if (action.number) {
    uncovered.push(number);
    return { ...state, uncovered, flags };
  } else {
    return state;
  }
};

export default boardReducer;
