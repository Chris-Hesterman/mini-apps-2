import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/board/boardReducer.js';

export default configureStore({
  reducer: {
    board: boardReducer
  }
});
