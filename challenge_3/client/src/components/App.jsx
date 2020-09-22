import React from 'react';
import Pinpad from './Pinpad.jsx';
import GameScore from './GameScore.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Pinpad />
        <GameScore />
      </div>
    );
  }
}

export default App;
