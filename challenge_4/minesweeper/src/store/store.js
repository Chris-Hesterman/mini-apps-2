import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/board/boardReducer.js';
import squareReducer from '../features/square/squareReducer';

export default configureStore({
  reducer: {
    board: boardReducer,
    square: squareReducer
  }
});
