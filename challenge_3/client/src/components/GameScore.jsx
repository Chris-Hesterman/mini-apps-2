import React from 'react';
import Frame from './Frame.jsx';

const GameScore = (props) => {
  const frames = [];
  for (let i = 1; i <= 10; i++) {
    frames.push(
      <td key={i}>
        <Frame frameNum={i} key={i} score="155" />
      </td>
    );
  }
  return (
    <div>
      <hr></hr>
      <table>
        <tbody>
          <tr>{frames}</tr>
        </tbody>
      </table>
      <hr></hr>
    </div>
  );
};

export default GameScore;
