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
      gameOver: false,
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
    let newStrikeScore = [];
    const scores = this.state.scores;
    const currFrame = this.state[`${this.state.currentFrame}`];
    const prevFrame = this.state[`${this.state.currentFrame - 1}`];
    // const nextFrame = this.state[`${this.state.currentFrame + 1}`];

    console.log('currFrame', currFrame);
    console.log('frame', this.state.currentFrame);

    while (
      scores.length + 3 + newStrikeScore.length <= this.state.currentFrame &&
      numberOfPins === 10
    ) {
      let newScore = newStrikeScore.length
        ? 30 + newStrikeScore[newStrikeScore.length - 1]
        : prevScore
        ? 30 + prevScore
        : 30;
      newStrikeScore.push(newScore);
    }

    if (
      scores.length + 3 + newStrikeScore.length === this.state.currentFrame &&
      currFrame[0]
    ) {
      let newScore = newStrikeScore.length
        ? 20 + currFrame[0] + newStrikeScore[newStrikeScore.length - 1]
        : prevScore
        ? 20 + currFrame[0] + prevScore
        : 20 + currFrame[0];
      newStrikeScore.push(newScore);
    }
    if (
      this.state.currentFrame === scores.length + 2 + newStrikeScore.length &&
      currFrame.length === 1 &&
      prevFrame &&
      prevFrame[0] === 'strike'
    ) {
      let newScore = newStrikeScore.length
        ? 10 +
          currFrame[0] +
          numberOfPins +
          newStrikeScore[newStrikeScore.length - 1]
        : prevScore
        ? 10 + currFrame[0] + numberOfPins + prevScore
        : 10 + currFrame[0] + numberOfPins;
      newStrikeScore.push(newScore);
    }
    console.log('newStrikeScore', newStrikeScore);
    return newStrikeScore;
  }

  addPins(numToppledPins) {
    const frame = [...this.state[`${this.state.currentFrame}`]];
    let scores = this.state.scores.slice();
    const spareBonus = this.updateSpareBonus(
      numToppledPins,
      this.state.scores[scores.length - 1]
    );
    const strikeBonus = this.updateStrikeBonus(
      numToppledPins,
      this.state.scores[scores.length - 1]
    );

    if (!frame.length && this.state.currentFrame !== 10) {
      if (spareBonus) {
        scores.push(spareBonus);
      }
      if (strikeBonus && strikeBonus.length) {
        scores = scores.concat(strikeBonus);
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
        if (strikeBonus && strikeBonus.length) {
          scores = scores.concat(strikeBonus);
        }
        frame.push(numToppledPins);
        this.setState({
          [`${this.state.currentFrame}`]: frame,
          scores
        });
      }
    } else if (this.state.currentFrame !== 10) {
      if (strikeBonus && strikeBonus.length) {
        scores = scores.concat(strikeBonus);
      }
      frame.push(numToppledPins);

      if (frame[0] + frame[1] === 10 && this.state.currentFrame !== 10) {
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

    if (this.state.currentFrame === 10) {
      console.log('tenframestrike', strikeBonus);
      const prevScore = scores[scores.length - 1];

      if (frame.length === 0) {
        if (spareBonus) {
          scores.push(spareBonus);
        }
        if (strikeBonus && strikeBonus.length) {
          console.log('This is strike bonus');
          scores = scores.concat(strikeBonus);
        }
        frame.push(numToppledPins);
        console.log('should set state now');
        this.setState({
          [`${this.state.currentFrame}`]: frame,
          scores
        });
      } else if (frame.length === 1) {
        if (strikeBonus && strikeBonus.length) {
          console.log('This is strike bonus');
          scores = scores.concat(strikeBonus);
        }
        if (frame[0] + numToppledPins < 10) {
          scores = scores.concat(
            frame[0] + numToppledPins + scores[scores.length - 1]
          );
        }
        frame.push(numToppledPins);
        this.setState({
          [`${this.state.currentFrame}`]: frame,
          scores
        });
      } else {
        console.log('finalFrame', frame);
        if (frame[0] + frame[1] < 10) {
          scores.push(frame[0] + frame[1] + prevScore);
        } else if (frame[0] + frame[1] >= 10) {
          scores.push(frame[0] + frame[1] + prevScore + numToppledPins);
          frame.push(numToppledPins);
        }
        this.setState({
          [`${this.state.currentFrame}`]: frame,
          scores
        });
      }
    }
  }

  advanceFrame() {
    const nextFrame =
      this.state.currentFrame < 10 ? this.state.currentFrame + 1 : 10;
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
