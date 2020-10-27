import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/store.js';
import './Square.css';

function Square(props) {
  let newClassName;

  if (
    props.mines.includes(props.number) &&
    props.uncovered.includes(props.number)
  ) {
    newClassName = ' Square-mine';
  }

  if (
    props.uncovered.includes(props.number) &&
    !props.mines.includes(props.number) &&
    !props.flags.includes(props.number)
  ) {
    newClassName = ' Square-uncovered';
  }

  return (
    <div
      className={`Square + ${newClassName ? newClassName : ''}`}
      data-number={props.number}
    ></div>
  );
}

const mapStateToProps = (state) => {
  return {
    uncovered: state.board.uncovered,
    mines: state.board.mines,
    flags: state.board.flags
  };
};

const SquareContainer = connect(mapStateToProps)(Square);

export default SquareContainer;
