import React from 'react';
import FrameStatus from './FrameStatus.jsx';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      currentFrameScore: null,
      score: 123,
      frameNumber: null
    };
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
              <h2>{this.state.score}</h2>
            </td>
          </tr>
          <tr>
            <td>frame: {this.props.frameNumber}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Frame;
