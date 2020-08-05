import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import styled, { createGlobalStyle } from 'styled-components';
import Title from './Title.jsx';
import Search from './Search.jsx';
import List from './List.jsx';

const GlobalStyle = createGlobalStyle`
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
    padding: 0 10px;
    height: 25px;
    color: black;
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
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: sans-serif;
  height: 100%;
  width: 100%;
  background: tan;
`;

const StyledDiv = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pageCount: 10,
      currentPage: 1,
      currentQuery: ''
    };
    this.getEventPage = this.getEventPage.bind(this);
    this.handlePage = this.handlePage.bind(this);
  }

  getEventPage(query, page = this.state.currentPage) {
    console.log(query);
    const getURL = `http://127.0.0.1:3000/events/?q=${query}&_sort=date&_page=${page}&_limit=4`;
    console.log('get');
    axios
      .get(getURL)
      .then((response) => {
        console.log(response);
        this.setState({
          events: response.data,
          currentQuery: query
        });
      })
      .catch((err) => {
        console.log(error);
      });
  }

  handlePage(data) {
    console.log(data.selected);
    this.setState((prevState, currState) => {
      return { currentPage: data.selected + 1 };
    }, this.getEventPage(this.state.currentQuery, data.selected + 1));
  }

  render() {
    return (
      <StyledWrapper>
        <GlobalStyle />
        <Title />
        <Search send={this.getEventPage} />
        <List events={this.state.events} />
        <StyledDiv>
          <ReactPaginate
            pageCount={this.state.pageCount}
            pageRangeDisplay={this.state.pageCount}
            marginPagesDisplayed={1}
            onPageChange={this.handlePage}
            activeClassName={'selected'}
            previousClassName={'previous'}
            nextClassName={'next'}
            containerClassName={'page-list'}
            pageClassName={'page-li'}
            previousLinkClassName={'prev-link'}
            nextLinkClassName={'next-link'}
            pageLinkClassName={'page-link'}
            activeLinkClassName={'active-link'}
          />
        </StyledDiv>
      </StyledWrapper>
    );
  }
}

export default App;
