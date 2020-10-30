import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import BoardContainer from './features/board/Board.js';

const App = (props) => {
  let newClassName;
  if (props.board.winner) {
    newClassName = 'App-winner';
  }
  if (props.board.loser) {
    newClassName = 'App-loser';
  }
  const titleMessage = props.board.winner
    ? 'WINNER!'
    : props.board.loser
    ? "IT SEEMS YOU'VE LOST. PITY, REALLY"
    : 'MINESWEEPER';

  return (
    <div className={`App ${newClassName ? newClassName : ''}`}>
      <h1>{titleMessage}</h1>
      <BoardContainer />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    board: {
      winner: state.board.win,
      loser: state.board.lose
    }
  };
};
const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;
