import React from 'react';
import { connect } from 'react-redux';
import uncoverBonus from './squareActions';
import { uncoverEntireBonus, buildAdjacent } from '../../uncoverEntireBonus.js';
import store from '../../store/store.js';
import checkAdjacent from '../../checkAdjacent.js';
import './Square.css';

function Square(props) {
  let num = props.number;
  let newClassName;
  const adjacent = checkAdjacent(props.number, props.mines);
  let safeZone = new Set();

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

    // const buildAdjacent = (num) => {
    //   let adjArray = [num - 10, num + 10];

    //   if (num % 10 !== 0 && num % 10 !== 1) {
    //     adjArray.push(num - 1, num + 1, num - 9, num + 9, num - 11, num + 11);
    //   }

    //   if (num % 10 === 1) {
    //     adjArray.push(num + 1, num - 9, num + 11);
    //   }

    //   if (num % 10 === 0) {
    //     adjArray.push(num + 9, num - 1, num - 11);
    //   }

    //   adjArray = adjArray.filter((num) => {
    //     if (num > 0 && num < 101) {
    //       return num;
    //     }
    //   });

    //   return adjArray;
    // };
    // maybe take this completely out of component8=*****************************
    // if (adjacent === 0) {
    //   const totalBonus = uncoverEntireBonus(
    //     props.number,
    //     props.uncovered,
    //     props.mines
    //   );

    // props.revealBonus(newUncovered);
    //}
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
