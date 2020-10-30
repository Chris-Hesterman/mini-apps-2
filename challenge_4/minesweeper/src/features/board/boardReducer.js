import { checkWin, checkLose } from '../../utils/checkWinLose.js';
import checkAdjacent from '../../utils/checkAdjacent.js';
import { uncoverEntireBonus } from '../../utils/uncoverEntireBonus.js';

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
    if (flags.length < 10) {
      flags.push(action.number);
      if (mines.includes(action.number)) {
        mines = mines.filter((num) => {
          return num !== action.number;
        });
      }
      uncovered.add(action.number);
    }

    if (checkWin(uncovered, mines)) {
      return { ...state, mines, uncovered: Array.from(uncovered), win: true };
    }
    return { ...state, mines, uncovered: Array.from(uncovered), flags };
  } else if (action.type === 'SQUARE_CLICKED' && action.number) {
    uncovered.add(action.number);
    if (checkWin(uncovered, state.mines)) {
      const newUncoveredWin = [...Array(101).keys()].slice(1);
      return { ...state, uncovered: newUncoveredWin, win: true };
    }
    if (checkLose(action.number, state.mines, flags)) {
      const newUncoveredLose = [...Array(101).keys()].slice(1);
      return { ...state, uncovered: newUncoveredLose, lose: true };
    }
    if (checkAdjacent(action.number, mines) === 0) {
      const bonusUncovered = uncoverEntireBonus(
        action.number,
        Array.from(uncovered),
        mines
      );
      Array.from(bonusUncovered).forEach((num) => {
        uncovered.add(num);
      });
    }
    return { ...state, uncovered: Array.from(uncovered) };
  } else if (action.type === 'UNCOVER_BONUS') {
  } else {
    return state;
  }
};

export default boardReducer;
