import React from 'react';
import FrameStatus from './FrameStatus.jsx';

const Frame = (props) => {
  const frames = [];
  for (let i = 1; i <= 10; i++) {
    frames.push(
      <th>
        <FrameStatus key={i} />
      </th>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>
            <FrameStatus />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h2>{props.score}</h2>
          </td>
        </tr>
        <tr>
          <td>frame: {props.frameNum}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Frame;
