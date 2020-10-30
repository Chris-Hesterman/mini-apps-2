import React from 'react';
import { connect } from 'react-redux';
import uncoverBonus from './squareActions';
import checkAdjacent from '../../utils/checkAdjacent.js';
import './Square.css';

function Square(props) {
  let newClassName;
  const adjacent = checkAdjacent(props.number, props.mines);

  if (props.uncovered.includes(props.number)) {
    if (
      props.mines.includes(props.number) &&
      !props.flags.includes(props.number)
    ) {
      console.log('mine');
      newClassName = 'Square-mine';
    }

    if (
      props.uncovered.includes(props.number) &&
      !props.mines.includes(props.number) &&
      !props.flags.includes(props.number)
    ) {
      newClassName = 'Square-uncovered';
    } else if (props.flags.includes(props.number) && !newClassName) {
      console.log('flagged');
      newClassName = 'Square-flagged';
    }
  }

  return (
    <div
      className={`Square ${newClassName ? newClassName : ''} ${
        adjacent === 0
          ? ''
          : adjacent === 1
          ? 'Square-adjacent-one'
          : adjacent === 2
          ? 'Square-adjacent-two'
          : 'Square-adjacent-three'
      }`}
      data-number={props.number}
    >
      {!props.mines.includes(props.number) &&
      props.uncovered.includes(props.number) &&
      !props.flags.includes(props.number) &&
      adjacent > 0
        ? adjacent
        : ''}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    uncovered: state.board.uncovered,
    mines: state.board.mines,
    flags: state.board.flags
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    revealBonus: (arg) => dispatch(uncoverBonus(arg))
  };
};

const SquareContainer = connect(mapStateToProps, mapDispatchToProps)(Square);

export default SquareContainer;
