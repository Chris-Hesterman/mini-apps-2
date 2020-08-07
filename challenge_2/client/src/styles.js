import styled, { createGlobalStyle } from 'styled-components';

// App.jsx styles------
export const GlobalStyle = createGlobalStyle`
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

export const StyledAppWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledH1 = styled.h1`
  margin-bottom: 50px;
  font-style: italic;
`;

// RangeInput.jsx styles--------
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-bottom: 50px;
`;

export const StyledInput = styled.input`
  margin-bottom: 30px;
  height: 20px;
  width: 200px;
  outline: none;
  background: beige;
  border-radius: 3px;
`;

export const StyledButton = styled.button`
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 3px;
  width: 100px;
  height: 25px;
  background: lightblue;
  border: 1px solid black;
  box-shadow: 2px 2px 2px #222;
  outline: none;
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 1px #222;
  }
`;

// CryptoChart.jsx styles ------
export const StyledChartWrapper = styled.div`
  width: 800px;
  height: 400px;
`;

export const StyledP = styled.p`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-family: sans-serif;
`;
