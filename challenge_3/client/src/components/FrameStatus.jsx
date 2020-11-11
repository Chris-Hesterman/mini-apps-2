import React from 'react';

const FrameStatus = (props) => {
  let status1 = props.status[0] || '';
  let status2 = props.status[1] || '';

  if (props.status[0] === 'strike') {
    status1 = 'X';
    status2 = '';
  }
  if (props.status[0] === 'spare') {
    console.log('spare true');
    status1 = props.status[1];
    status2 = '/';
  }

  const status = `${status1} ${'  |  '} ${status2}`;
  return <p>{status}</p>;
};

export default FrameStatus;
