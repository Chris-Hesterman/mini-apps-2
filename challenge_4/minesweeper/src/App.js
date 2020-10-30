import React from 'react';
import { connect } from 'react-redux';
import store from './store/store.js';
import './App.css';
import BoardContainer from './features/board/Board.js';

const App = (props) => {
  const titleMessage = props.board.winner
    ? 'WINNER!'
    : props.board.loser
    ? "IT SEEMS YOU'VE LOST. PITY, REALLY"
    : 'MINESWEEPER';

  return (
    <div className="App">
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
