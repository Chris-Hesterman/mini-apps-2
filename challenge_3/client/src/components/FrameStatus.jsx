import React from 'react';

const FrameStatus = (props) => {
  let status1 = props.status[0];
  let status2 = props.status[1];

  if (props.status[0] === 10) {
    status1 = 'X';
    status2 = null;
  }
  if (props.status[0] < 10 && props.status[0] + props.status[1] === 10) {
    status2 = '/';
  }
  const status = `${status1 ? status1 : ' '} ${'  |  '} ${
    status2 ? status2 : ' '
  }`;
  return <p>{status}</p>;
};

export default FrameStatus;
