import { checkWin, checkLose } from '../../checkWinLose.js';

const generateState = () => {
  const initialState = {
    win: false,
    lose: false,
    mines: [],
    flags: [],
    uncovered: []
  };
  while (initialState.mines.length < 10) {
    let num = Math.ceil(Math.random() * 100);

    if (!initialState.mines.includes(num)) {
      initialState.mines.push(num);
    }
  }
  return initialState;
};

const boardReducer = (state = generateState(), action) => {
  let uncovered = new Set([...state.uncovered]);
  let flags = [...state.flags];
  let mines = [...state.mines];

  if (action.type === 'SQUARE_FLAGGED' && action.number) {
    flags.push(action.number);
    if (mines.includes(action.number)) {
      mines = mines.filter((num) => {
        return num !== action.number;
      });
    }
    if (uncovered.has(action.number)) {
      return state;
    }
    uncovered.add(action.number);
    if (checkWin(uncovered.size, mines)) {
      return { ...state, mines, uncovered: Array.from(uncovered), win: true };
    }
    return { ...state, mines, uncovered: Array.from(uncovered), flags };
  } else if (action.type === 'SQUARE_CLICKED' && action.number) {
    uncovered.add(action.number);
    if (checkWin(uncovered.size, state.mines.length)) {
      const newUncoveredWin = [...Array(101).keys()].slice(1);
      return { ...state, uncovered: newUncoveredWin, win: true };
    }
    if (checkLose(action.number, state.mines, flags)) {
      const newUncoveredLose = [...Array(101).keys()].slice(1);
      return { ...state, uncovered: newUncoveredLose, lose: true };
    }
    return { ...state, uncovered: Array.from(uncovered) };
  } else if (action.type === 'UNCOVER_ADJ_EMPTY') {
  } else {
    return state;
  }
};

export default boardReducer;
