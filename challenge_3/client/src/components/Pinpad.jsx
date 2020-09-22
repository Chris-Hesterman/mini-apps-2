import React from 'react';
import NumButton from './NumButton.jsx';

class Pinpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.textContent);
  }

  render() {
    return (
      <div>
        <table onClick={this.handleClick}>
          <tbody>
            <tr>
              <td>
                <NumButton num="1" key="1" />
              </td>
              <td>
                <NumButton num="2" key="2" />
              </td>
              <td>
                <NumButton num="3" key="3" />
              </td>
            </tr>
            <tr>
              <td>
                <NumButton num="4" key="4" />
              </td>
              <td>
                <NumButton num="5" key="5" />
              </td>
              <td>
                <NumButton num="6" key="6" />
              </td>
            </tr>
            <tr>
              <td>
                <NumButton num="7" key="7" />
              </td>
              <td>
                <NumButton num="8" key="8" />
              </td>
              <td>
                <NumButton num="9" key="9" />
              </td>
            </tr>
            <tr>
              <td>
                <NumButton num="10" key="10" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Pinpad;
