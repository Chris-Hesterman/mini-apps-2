import React from 'react';

const FrameStatus = (props) => {
  const status = `${props.status.length ? props.status[0] : ' '} ${'  |  '} ${
    props.status.length && props.status.length > 1 ? props.status[1] : ' '
  }`;
  return <p>{status}</p>;
};

export default FrameStatus;
