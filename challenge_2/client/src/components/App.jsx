import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CryptoChart from './CryptoChart.jsx';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
    padding: 0;
    margin: 0;
  }
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  div#app {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

const StyledWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledWrapper>
        <GlobalStyle />
        <h1>Yes, it's a nifty chart!</h1>
        <CryptoChart />
      </StyledWrapper>
    );
  }
}

export default App;
