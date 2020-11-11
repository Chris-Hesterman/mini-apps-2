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
      bonusFrames: [],
      scores: []
    };
    this.addPins = this.addPins.bind(this);
    this.advanceFrame = this.advanceFrame.bind(this);
    this.updateSpareBonus = this.updateSpareBonus.bind(this);
    this.updateStrikeBonus = this.updateStrikeBonus.bind(this);
  }

  updateSpareBonus(numberOfPins, prevScore) {
    let newSpareScore = prevScore
      ? 10 + numberOfPins + prevScore
      : 10 + numberOfPins;

    if (
      this.state[`${this.state.currentFrame - 1}`] &&
      this.state[`${this.state.currentFrame - 1}`][0] === 'spare'
    ) {
      console.log('newSpareScore', newSpareScore);
      return newSpareScore;
    }
  }

  updateStrikeBonus(numberOfPins, prevScore) {
    let newStrikeScore;
    const currFrame = this.state[`${this.state.currentFrame}`];
    const prevFrame = this.state[`${this.state.currentFrame - 1}`];
    const nextFrame = this.state[`${this.state.currentFrame + 1}`];

    console.log('currFrame', currFrame);
    console.log('numpins', numberOfPins);

    if (prevFrame && prevFrame[0] === 'strike') {
      console.log('strikezone', currFrame);

      if (currFrame && currFrame.length === 1) {
        console.log('not strike');
        newStrikeScore = 10 + currFrame[0] + numberOfPins;
        console.log('newscore', newStrikeScore);
        newStrikeScore =
          this.state.currentFrame > 2
            ? newStrikeScore + prevScore
            : newStrikeScore;
      }
    }

    console.log('newStrikeScore', newStrikeScore);
    return newStrikeScore;
  }

  addPins(numToppledPins) {
    const frame = [...this.state[`${this.state.currentFrame}`]];
    const scores = this.state.scores.slice();
    let total = this.state.total;
    const spareBonus = this.updateSpareBonus(
      numToppledPins,
      this.state.scores[scores.length - 1]
    );
    const strikeBonus = this.state[`${this.state.currentFrame}`].length
      ? this.updateStrikeBonus(
          numToppledPins,
          this.state.scores[scores.length - 1]
        )
      : null;

    if (!frame.length) {
      if (spareBonus) {
        scores.push(spareBonus);
      }
      if (typeof strikeBonus === 'number') {
        scores.push(strikeBonus);
      }
      if (numToppledPins === 10) {
        frame.push('strike', 10);
        this.setState((prevState) => {
          return {
            [`${this.state.currentFrame}`]: frame,
            scores
          };
        }, this.advanceFrame());
      } else {
        console.log('Should come second');
        if (typeof strikeBonus === 'number') {
          scores.push(strikeBonus);
        }
        frame.push(numToppledPins);
        this.setState({
          [`${this.state.currentFrame}`]: frame,
          scores
        });
      }
    } else {
      if (typeof strikeBonus === 'number') {
        scores.push(strikeBonus);
      }
      frame.push(numToppledPins);
      if (frame[0] + frame[1] === 10) {
        frame.unshift('spare');
      } else {
        scores.push(
          (scores[this.state.currentFrame - 2] || 0) + frame[0] + frame[1]
        );
      }
      this.setState((prevState) => {
        return { [`${this.state.currentFrame}`]: frame, scores };
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
