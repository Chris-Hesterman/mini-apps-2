import React from 'react';
import './Square.css';

function Square(props) {
  return (
    <div className="Square" data-number={props.number}>
      <p>square</p>
    </div>
  );
}

export default Square;
