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
      scores: []
    };
    this.addPins = this.addPins.bind(this);
    this.advanceFrame = this.advanceFrame.bind(this);
    this.calculateScores = this.calculateScores.bind(this);
  }

  calculateScores() {
    // let scores = [];
    // console.log('calc');
    // for (let i = 1; i < 11; i++) {
    //   const frame = this.state[i.toString()];
    //   console.log('frame', frame);
    //   if (frame.length === 2 && frame[0] + frame[1] < 10) {
    //     scores.push(frame[0] + frame[1]);
    //   }
    // }
  }

  addPins(numToppledPins) {
    console.log(numToppledPins);
    const frame = [...this.state[this.state.currentFrame.toString()]];
    const scores = this.state.scores.slice();

    if (!frame.length) {
      if (numToppledPins === 10) {
        scores.push('strike');
        frame.push(10);
        this.setState((prevState) => {
          return {
            [this.state.currentFrame.toString()]: frame,
            scores: scores
          };
        }, this.advanceFrame());
      } else {
        console.log('ok');

        frame.push(numToppledPins);
        this.setState({
          [this.state.currentFrame.toString()]: frame,
          scores: scores
        });
      }
    } else {
      frame.push(numToppledPins);
      if (frame[0] + frame[1] === 10) {
        scores.push('spare');
      } else if (typeof scores[scores.length - 1] === 'number') {
        scores.push(frame[0] + frame[1] + scores[scores.length - 1]);
      } else {
        scores.push(frame[0] + frame[1]);
      }
      this.setState((prevState) => {
        return { [this.state.currentFrame.toString()]: frame, scores: scores };
      }, this.advanceFrame());
    }
  }

  advanceFrame() {
    const nextFrame =
      this.state.currentFrame < 10 ? this.state.currentFrame + 1 : null;
    this.setState((prevState) => {
      return { currentFrame: nextFrame };
    });
  }

  render() {
    return (
      <div>
        <Pinpad
          throwBall={this.addPins}
          currentStatus={this.state[this.state.currentFrame.toString()]}
        />
        <GameScore frames={this.state} />
      </div>
    );
  }
}

export default App;
