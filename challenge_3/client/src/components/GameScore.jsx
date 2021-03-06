import React from 'react';
import Frame from './Frame.jsx';

const GameScore = (props) => {
  const frameUnits = [];
  for (let i = 1; i <= 10; i++) {
    frameUnits.push(
      <td key={i}>
        <Frame
          scores={props.frames.scores}
          frames={props.frames}
          key={i}
          frameNumber={i}
          currentFrame={props.frames.currentFrame}
        />
      </td>
    );
  }
  return (
    <div>
      <h2>Score Card</h2>
      <hr></hr>
      <table>
        <tbody>
          <tr>{frameUnits}</tr>
        </tbody>
      </table>
      <hr></hr>
    </div>
  );
};

export default GameScore;
