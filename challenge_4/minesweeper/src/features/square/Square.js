import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/store.js';
import checkAdjacent from '../../checkAdjacent.js';
import './Square.css';

function Square(props) {
  let num = props.number;
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
    const helper = (num, bonus) => {
      let adjArray = [num - 10, num + 10];

      if (!num % 10 === 0) {
        adjArray.push(num + 1, num - 9, +11);
      }

      if (!num % 10 === 1) {
        adjArray.push(num - 1, num + 9, num - 11);
      }

      const result = adjArray.filter((num) => {
        if (
          !props.mines.includes(num) &&
          checkAdjacent(num, props.mines) === 0
        ) {
          if (num > 0 && num < 101) {
            return num;
          }
        }
      });

      return result;
    };
    if (adjacent === 0) {
      // console.log(helper(props.uncovered[props.uncovered.length - 1], []));
      console.log(helper(props.number, props.mines));
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
// const mapdDispatchToProps = (dispatch, ownProps) => {
//   return {
//     uncoverBonus: (arg) => dispatch(uncoverAdjacentEmpty(arg))
//   };
// };

const SquareContainer = connect(mapStateToProps)(Square);

export default SquareContainer;
