import React from 'react';
import NumButton from './NumButton.jsx';

class Pinpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('throw');
    if (this.props.currentStatus.length === 1) {
      this.setState({ total: 0 });
    }
    this.props.throwBall(+e.target.textContent);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.currentStatus.length === 1 &&
      prevProps.currentStatus.length === 0
    ) {
      this.setState({ total: this.props.currentStatus[0] });
    }
  }

  render() {
    const buttonsArray = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= 10 - this.state.total) {
        buttonsArray.push(
          <td key={i.toString()}>
            <NumButton num={i.toString()} key={i.toString()} />
          </td>
        );
      }
    }
    return (
      <div>
        <h2>Please select how many pins to knock down</h2>
        <table onClick={this.handleClick}>
          <tbody>
            <tr>{buttonsArray}</tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Pinpad;
