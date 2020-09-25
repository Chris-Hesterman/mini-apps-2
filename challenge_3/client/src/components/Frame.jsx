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
      prevScore: 0
    };
    this.updateFrameScore = this.updateFrameScore.bind(this);
  }

  updateFrameScore() {
    const key = this.props.frameNumber.toString();

    if (
      this.props.frames[key][0] !== 'X' &&
      this.props.frames[key][1] !== '/'
    ) {
      const score = this.props.frames[key][0] + this.props.frames[key][1];
      console.log('updating score', score);

      this.setState({ score: score });
    }
  }

  componentDidMount() {
    this.setState({
      frameNumber: this.props.frameNumber
    });
  }

  componentDidUpdate(prevProps) {
    const frameKey = this.props.frameNumber.toString();

    if (
      this.props.frames[frameKey].length !== prevProps.frames[frameKey].length
    ) {
      this.setState((prevState) => {
        return { status: this.props.frames[frameKey] };
      });
    }
    if (
      this.props.frames[frameKey].length === 2 &&
      prevProps.frames[frameKey].length === 1
    ) {
      this.updateFrameScore();
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
