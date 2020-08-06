import React from 'react';
import axios from 'axios';
import moment from 'moment';
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
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(startDate = '2020-03-01', endDate = '2020-04-22') {
    const fetchURL = `http://127.0.0.1:3000/crypto?start=${startDate}&end=${endDate}`;

    axios
      .get(fetchURL)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }

  componentDidMount() {
    this.fetchData();
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
