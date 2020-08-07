import React from 'react';
import axios from 'axios';
import moment from 'moment';
import styled, { createGlobalStyle } from 'styled-components';
import CryptoChart from './CryptoChart.jsx';
import RangeInput from './RangeInput.jsx';
import { GlobalStyle, StyledAppWrapper, StyledH1 } from '../styles.js';

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
        if (typeof response.data === 'string') {
          throw response.data;
        } else {
          this.setState({ data: response.data });
        }
      })
      .catch((err) => {
        alert(err);
        throw err;
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <StyledAppWrapper>
        <GlobalStyle />
        <StyledH1>Check Historic Bitcoin Value</StyledH1>
        <RangeInput getRange={this.fetchData} />
        {this.state.data.hasOwnProperty('bpi') && (
          <CryptoChart
            bpi={this.state.data.bpi}
            dis={this.state.data.disclaimer}
          />
        )}
      </StyledAppWrapper>
    );
  }
}

export default App;
