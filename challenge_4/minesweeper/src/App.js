import React from 'react';
import './App.css';
import BoardContainer from './features/board/Board.js';

function App() {
  return (
    <div className="App">
      <h1>Minesweeper</h1>
      <BoardContainer />
    </div>
  );
}

export default App;
