import React from 'react';
import axios from 'axios';
import moment from 'moment';
import styled, { createGlobalStyle } from 'styled-components';
import CryptoChart from './CryptoChart.jsx';
import RangeInput from './RangeInput.jsx';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
    padding: 20px 0 0 0;
    margin: 0;
  }
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    background-color: lightgreen;
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
  justify-content: flex-start;
`;

const StyledH1 = styled.h1`
  margin-bottom: 50px;
  font-style: italic;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(startDate = '2020-03-01', endDate = '2020-04-22') {
    const fetchURL = `http://127.0.0.1:3000/crypto?start=${startDate}&end=${endDate}`;

    axios
      .get(fetchURL)
      .then((response) => {
        console.log(response.data.bpi);
        if (typeof response.data === 'string') {
          console.log(response.data);
        } else {
          this.setState({ data: response.data });
        }
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
        <StyledH1>Check Historic Bitcoin Value</StyledH1>
        <RangeInput getRange={this.fetchData} />
        {this.state.data.hasOwnProperty('bpi') && (
          <CryptoChart
            bpi={this.state.data.bpi}
            dis={this.state.data.disclaimer}
          />
        )}
      </StyledWrapper>
    );
  }
}

export default App;
