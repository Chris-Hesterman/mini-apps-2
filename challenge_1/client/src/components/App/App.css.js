import styled, { createGlobalStyle } from 'styled-components';

//  App.jsx styles------
export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%
  }
  div#react-paginate {
    height: 100%;
    width: 100%;
    background: tan;
  }
  ul.page-list {
    display: flex;
    list-style-type: none;
    padding: 0;
    width: 400px;
    justify-content: space-around;
    align-items: center;
  }
  li.page-li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 2px solid #d1913c;
    border-radius: 25px;
    background: rgba(230, 230, 230, 0.5);
    &:hover {
      background: #d1913c;
      color: white;
      cursor: pointer;
    }
  }
  li.next, li.previous {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #d1913c;
    border-radius: 25px;
    padding: 2.5px 10px 0 10px;
    height: 25px;
    color: black;
    background: rgba(230, 230, 230, 0.5);
    &:hover {
      background: green;
      color: white;
      cursor: pointer;
      text-decoration: underline;
    }
  }
  li.selected {
    border-color: lime;
  }
  a.page-link, a.next-link, a.prev-link {
    outline: none;
  }
  a.page-link {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: sans-serif;
  height: 100%;
  width: 100%;
  background: tan;
`;

export const StyledAppDiv = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
`;
