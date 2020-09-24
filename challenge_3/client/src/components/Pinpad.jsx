import React from 'react';
import NumButton from './NumButton.jsx';

class Pinpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.throwBall(+e.target.textContent);
  }

  render() {
    const buttonsArray = [];
    for (let i = 1; i <= 10; i++) {
      buttonsArray.push(
        <td key={i.toString()}>
          <NumButton num={i.toString()} key={i.toString()} />
        </td>
      );
    }
    return (
      <div>
        <h2>Please select how many pins to knock down</h2>
        <table onClick={this.handleClick}>
          <tbody>
            <tr>{buttonsArray.slice(0, 3)}</tr>
            <tr>{buttonsArray.slice(3, 6)}</tr>
            <tr>{buttonsArray.slice(6, 9)}</tr>
            <tr>{buttonsArray.slice(-1)}</tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Pinpad;
