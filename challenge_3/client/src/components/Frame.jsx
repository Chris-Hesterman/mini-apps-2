import React from 'react';
import FrameStatus from './FrameStatus.jsx';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frameNumber: 1
    };
    // this.checkScore = this.checkScore.bind(this);
  }

  // checkScore() {
  //   let scores = this.props.frames.scores;

  //   if (this.props.score === 'strike') {
  //     for (let score = 0; score < scores.lenght; score++) {
  //       if (score === 'strike') {
  //         if (scores[score + 1] === 'spare') {
  //           scores[score] = 20 + scores[score - 1];
  //         }
  //         this.setState({ scores: scores });
  //       }
  //       if (score === 'spare') {
  //       }
  //     }
  //   }
  // }

  componentDidMount() {
    this.setState({
      frameNumber: this.props.frameNumber
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th key={this.props.frameNumber}>
              <FrameStatus
                status={this.props.frames[this.props.frameNumber.toString()]}
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
              <h2>
                {typeof this.props.score !== 'number'
                  ? ' - - '
                  : this.props.score}
              </h2>
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
