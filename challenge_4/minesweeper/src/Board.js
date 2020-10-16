import React from 'react';
import './Board.css';
import Square from './Square';

function Board(props) {
  const squares = [];
  for (let i = 0; i < 100; i++) {
    squares.push(<Square key={i} number={i} />);
  }
  return <div className="Board">{squares}</div>;
}

export default Board;
