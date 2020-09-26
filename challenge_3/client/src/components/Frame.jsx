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
    const frameKeyNextNext =
      this.state.frameNumber < 9
        ? (this.props.frameNumber + 2).toString()
        : null;

    if (
      this.props.frames[frameKey].length !== prevProps.frames[frameKey].length
    ) {
      if (this.props.frames[frameKey][0] === 10) {
        this.setState(
          { status: this.props.frames[frameKey], strike: true },
          this.updateFrameScore()
        );
        return;
      } else if (
        this.props.frames[frameKey][0] + this.props.frames[frameKey][1] ===
        10
      ) {
        this.setState({ status: this.props.frames[frameKey], spare: true });
      } else {
        this.setState((prevState) => {
          return { status: this.props.frames[frameKey] };
        }, this.updateFrameScore());
      }
    }

    if (this.props.frames[frameKeyNext] !== prevProps.frames[frameKeyNext]) {
      if (prevState.strike && this.props.frames[frameKeyNext].length === 2) {
        const bonus =
          this.props.frames[frameKeyNext][0] +
          this.props.frames[frameKeyNext][1];
        this.setState((prevState) => {
          return {
            currentFrameScore: 10 + bonus,
            score: bonus + 10
          };
        });
        this.updateFrameScore();
      }

      if (prevState.strike && this.props.frames[[frameKeyNext][0] === 10]) {
      }

      if (prevState.spare && this.props.frames[frameKeyNext].length === 1) {
        const bonus = this.props.frames[frameKeyNext][0];
        this.setState((prevState) => {
          return {
            currentFrameScore: 10 + bonus,
            score: bonus + 10
          };
        });
        this.updateFrameScore();
      }
    }
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
                <p>{`> ${this.props.frameNumber} <`}</p>
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
