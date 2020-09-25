import React from 'react';
import FrameStatus from './FrameStatus.jsx';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      currentFrameScore: null,
      score: 0,
      frameNumber: null,
      strike: false,
      spare: false
    };
    this.updateFrameScore = this.updateFrameScore.bind(this);
    this.handleStrike = this.handleStrike.bind(this);
    this.handleSpare = this.handleSpare.bind(this);
  }

  updateFrameScore() {
    const key = this.props.frameNumber.toString();
    let score;

    if (
      this.props.frames[key].length === 2 &&
      this.props.frames[key][0] !== 10 &&
      this.props.frames[key][1] + this.props.frames[key][0] !== 10
    ) {
      score = this.props.frames[key][0] + this.props.frames[key][1];
      console.log('updating score', score);

      this.setState((prevState) => {
        return {
          score: score,
          currentFrameScore: score
        };
      });
      this.props.sendScore(score);
    }

    if (this.props.frames[key][0] === 10) {
      this.setState({ currentFrameScore: 10 });

      // const frameKeyNext =
      //   this.state.frameNumber < 10
      //     ? (this.props.frameNumber + 1).toString()
      //     : null;
      // const statusNext = this.props.frames[frameKeyNext];
      // console.log('statusNext', statusNext);

      // if (statusNext && statusNext.length === 2) {
      //   const bonus = statusNext[0] + statusNext[1];
      //   this.setState({ score: bonus + 10, currentFrameScore: bonus + 10 });
      // }
    }

    if (
      this.props.frames[key][0] + this.props.frames[key][1] === 10 &&
      this.props.frames[1] !== 0
    ) {
      this.handleSpare();
    }
  }

  handleStrike() {
    console.log('handleStrike');
    this.setState({ currentFrameScore: 10 });

    // const statusNext = this.props.frames[
    //   (this.props.frameNumber + 1).toString()
    // ];
    // console.log(statusNext);
    // if (statusNext && statusNext.length === 2) {
    //   const bonus = statusNext[0] + statusNext[1];
    //   this.setState({ score: bonus + 10, currentFrameScore: bonus + 10 });
    // }
  }

  handleSpare() {
    console.log('handleSpare');
  }

  componentDidMount() {
    this.setState({
      frameNumber: this.props.frameNumber
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const frameKey = this.props.frameNumber.toString();
    const frameKeyNext =
      this.state.frameNumber < 10
        ? (this.props.frameNumber + 1).toString()
        : null;

    if (
      this.props.frames[frameKey].length !== prevProps.frames[frameKey].length
    ) {
      if (this.props.frames[frameKey][0] === 10) {
        this.setState(
          { status: this.props.frames[frameKey], strike: true },
          this.updateFrameScore()
        );
      } else {
        this.setState((prevState) => {
          return { status: this.props.frames[frameKey] };
        }, this.updateFrameScore());
      }
    }

    if (this.props.frames[frameKeyNext] !== prevProps.frames[frameKeyNext]) {
      console.log(this.props.frames[frameKeyNext]);
      if (prevState.strike && this.props.frames[frameKeyNext].length === 2) {
        const bonus =
          this.props.frames[frameKeyNext][0] +
          this.props.frames[frameKeyNext][1];
        this.setState((prevState) => {
          return {
            currentFrameScore: 10 + bonus,
            score: bonus + 10
          };
        }, this.props.sendScore(bonus));
        this.updateFrameScore();
      }
    }

    // if (
    //   this.props.frames[frameKey].length === 2 &&
    //   prevProps.frames[frameKey].length === 1
    // ) {
    //   this.updateFrameScore();
    // }
    // if (
    //   frameKeyNext &&
    //   this.props.frames[frameKeyNext].length !==
    //     prevProps.frames[frameKeyNext].length
    // ) {
    //   if (this.state.strike) {
    //     this.handleStrike();
    //   }
    //   if (this.state.spare) {
    //     this.handleSpare();
    //   }
    // }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th key={this.props.frameNumber}>
              <FrameStatus
                status={this.state.status}
                frameNumber={this.state.frameNumber}
                currFrame={this.props.frames.currentFrame}
                key={this.props.frameNumber}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h2>{this.state.score > 0 ? this.state.score : ' - - '}</h2>
            </td>
          </tr>
          <tr>
            <td>
              frame:{' '}
              {this.state.frameNumber === this.props.frames.currentFrame ? (
                <h3>{this.props.frameNumber}</h3>
              ) : (
                <p>{this.props.frameNumber}</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Frame;
