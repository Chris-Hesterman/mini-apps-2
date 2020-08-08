import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import Title from '../Title.jsx';
import Search from '../Search/Search.jsx';
import List from '../List/List.jsx';
import Edit from '../Edit.jsx';
import { GlobalStyle, StyledAppWrapper, StyledAppDiv } from './App.css.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pageCount: 3,
      currentPage: 1,
      currentQuery: '',
      edit: false
    };
    this.getEventPage = this.getEventPage.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  getEventPage(query, page = 1) {
    const getURL = `http://127.0.0.1:3000/events/?q=${query}&_sort=date&_page=${page}&_limit=4`;

    axios
      .get(getURL)
      .then((response) => {
        let pageCount = +response.headers['x-total-count'] / 4;

        this.setState({
          events: response.data,
          currentQuery: query,
          currentPage: page,
          pageCount: pageCount
        });
      })
      .catch((err) => {
        console.log(error);
      });
  }

  patchEvents(data) {
    data.forEach((event) => {
      axios
        .patch('http:127.0.0.1:3000/events', event)
        .then(() => console.log('updated'))
        .catch((err) => alert('something went wrong', err));
    });
  }

  handlePage(data) {
    if (this.state.events.length) {
      this.setState((prevState, currState) => {
        return { currentPage: data.selected + 1 };
      }, this.getEventPage(this.state.currentQuery, data.selected + 1));
    }
  }

  handleEdit(e) {
    this.setState((prev, curr) => {
      return { edit: !this.state.edit };
    });
  }

  saveEdit(data) {
    this.setState({ events: data, edit: false });
  }

  render() {
    return (
      <StyledAppWrapper>
        <GlobalStyle />
        <Title />
        <Search send={this.getEventPage} />
        {this.state.edit ? (
          <Edit
            done={this.handleEdit}
            events={this.state.events}
            save={this.saveEdit}
          />
        ) : (
          <List
            events={this.state.events}
            currentQuery={this.state.currentQuery}
            edit={this.handleEdit}
          />
        )}

        <StyledAppDiv>
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
            forcePage={this.state.currentPage - 1}
          />
        </StyledAppDiv>
      </StyledAppWrapper>
    );
  }
}

export default App;
