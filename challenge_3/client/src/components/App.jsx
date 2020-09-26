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
      10: [],
      total: 0
    };
    this.addPins = this.addPins.bind(this);
    this.advanceFrame = this.advanceFrame.bind(this);
    this.retrieveScore = this.retrieveScore.bind(this);
    this.checkFrameLength = this.checkFrameLength.bind(this);
  }

  retrieveScore(num) {
    // const scores = this.state.scores.slice();
    // scores.push(num);
    this.setState((prevState) => {
      return { total: (prevState.total += num) };
    });
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
      console.log('no frame length');
      if (numToppledPins === 10) {
        frame.push(10);
        console.log(frame);
        this.setState((prevState) => {
          return { [this.state.currentFrame.toString()]: frame };
        }, this.advanceFrame());
        return;
      }
    }

    if (frame[0] + numToppledPins === 10) {
      frame.push(10 - frame[0]);
      console.log(frame);
      this.setState((prevState) => {
        return { [this.state.currentFrame.toString()]: frame };
      }, this.advanceFrame());
      return;
    }

    if (frame.length < 2) {
      frame.push(numToppledPins);
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
        <Pinpad
          throwBall={this.addPins}
          currentStatus={this.state[this.state.currentFrame.toString()]}
        />
        <GameScore
          frames={this.state}
          sendScore={this.retrieveScore}
          tally={this.state.total}
        />
      </div>
    );
  }
}

export default App;
