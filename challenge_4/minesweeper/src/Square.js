import React from 'react';
import './Square.css';

function Square(props) {
  return (
    <div className="Square" value={props.place}>
      <p onClick={props.clickHandler}>square</p>
    </div>
  );
}

export default Square;
