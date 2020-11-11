import React from 'react';
import FrameStatus from './FrameStatus.jsx';

const Frame = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th key={props.frameNumber}>
            <FrameStatus
              status={props.frames[`${props.frameNumber}`]}
              frameNumber={props.frameNumber}
              currFrame={props.frames.currentFrame}
              key={props.frameNumber}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h2>
              {props.scores[props.frameNumber - 1]
                ? props.scores[props.frameNumber - 1]
                : ' - - '}
            </h2>
          </td>
        </tr>
        <tr>
          <td>
            frame:{' '}
            {props.frameNumber === props.frames.currentFrame ? (
              <p>{`> ${props.frameNumber} <`}</p>
            ) : (
              <p>{props.frameNumber}</p>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Frame;
