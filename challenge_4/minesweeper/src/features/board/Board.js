import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/store.js';
import { handleClickedSquare, handleFlaggedSquare } from './boardActions.js';
import './Board.css';
import SquareContainer from '../square/Square.js';

function Board(props) {
  const squares = [];
  for (let i = 1; i < 101; i++) {
    squares.push(<SquareContainer key={i} number={i} />);
  }

  const handleClick = (e) => {
    props.handleClick(+e.target.dataset['number']);
  };

  const handleFlag = (e) => {
    e.preventDefault();
    props.handleFlag(+e.target.dataset['number']);
  };
  return (
    <div className="Board" onClick={handleClick} onContextMenu={handleFlag}>
      {squares}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: (arg) => dispatch(handleClickedSquare(arg)),
    handleFlag: (arg) => dispatch(handleFlaggedSquare(arg))
  };
};

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
