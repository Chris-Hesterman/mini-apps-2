import React from 'react';
import './Board.css';
import Square from '../square/Square';

function Board(props) {
  const squares = [];
  for (let i = 1; i < 101; i++) {
    squares.push(<Square key={i} number={i} />);
  }
  return (
    <div
      className="Board"
      onClick={(e) => console.log('click', e.target.dataset['number'])}
    >
      {squares}
    </div>
  );
}

export default Board;
