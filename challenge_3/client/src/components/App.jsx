import React from 'react';
import Pinpad from './Pinpad.jsx';
import GameScore from './GameScore.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrame: 1,
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: []
    };
    this.addPins = this.addPins.bind(this);
    this.advanceFrame = this.advanceFrame.bind(this);
    this.checkFrameLength = this.checkFrameLength.bind(this);
  }

  checkFrameLength() {
    if (
      this.state[this.state.currentFrame.toString()].length === 2 &&
      this.state.frameNumber !== 10
    ) {
      this.advanceFrame();
    }
  }

  addPins(numToppledPins) {
    console.log(numToppledPins);
    const frame = [...this.state[this.state.currentFrame.toString()]];

    if (!frame.length) {
      if (numToppledPins === 10) {
        frame.push('X');
        console.log(frame);
        this.setState({ frame });

        return;
      }
    }

    if (frame[0] + numToppledPins === 10) {
      frame.push('/');
      console.log(frame);
      this.setState({ frame });

      return;
    }

    if (frame.length < 2) {
      frame.push(numToppledPins);
      console.log(frame);
      this.setState({ [this.state.currentFrame.toString()]: frame });

      return;
    }
  }

  advanceFrame() {
    this.setState((prevState) => {
      return { currentFrame: prevState.currentFrame + 1 };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state[this.state.currentFrame.toString()].length !==
      prevState[this.state.currentFrame.toString()].length
    ) {
      this.checkFrameLength();
    }
  }

  render() {
    return (
      <div>
        <Pinpad throwBall={this.addPins} />
        <GameScore frames={this.state} />
      </div>
    );
  }
}

export default App;
