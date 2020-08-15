import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import Title from '../Title.jsx';
import Search from '../Search/Search.jsx';
import List from '../List/List.jsx';
import Edit from '../Edit/Edit.jsx';
import { GlobalStyle, StyledAppWrapper, StyledAppDiv } from './App.css.js';

const initialState = {
  events: [],
  pageCount: 3,
  currentPage: 1,
  currentQuery: '',
  edit: false,
  error: false,
  query: true
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.getEventPage = this.getEventPage.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.putEvents = this.putEvents.bind(this);
  }

  getEventPage(query, page = 1) {
    const getURL = `/events?q=${query}&page=${page}&limit=4`;

    if (query.length) {
      axios
        .get(getURL)
        .then((response) => {
          let pageCount = response.data.totalPages;

          this.setState({
            events: response.data.docs,
            currentQuery: query,
            currentPage: page,
            pageCount: pageCount,
            error: false
          });
        })
        .catch((err) => {
          if (query.length === 0) {
            this.setState({ query: false });
          } else {
            this.setState({ error: true });
          }
        });
    }
  }

  putEvents(data) {
    this.setState({ events: data, edit: false });

    axios
      .put(`/events`, data)
      .then((response) => {
        console.log('events updated!', response);
        this.setState({ error: false });
      })
      .catch((err) => {
        this.setState({ error: true });
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
    this.putEvents(data);
  }

  render() {
    const eventsCopy = this.state.events.map((event) => {
      return Object.assign({}, event);
    });

    return (
      <StyledAppWrapper data-test="appComponent" className="app">
        <GlobalStyle />
        <Title data-test="titleComponent" />
        <Search data-test="searchComponent" send={this.getEventPage} />
        {this.state.error && (
          <h2>Something went wrong! Please refresh and try again.</h2>
        )}
        {this.state.edit && (
          <Edit
            data-test="editComponent"
            className="edit"
            done={this.handleEdit}
            eventData={eventsCopy}
            save={this.saveEdit}
          />
        )}
        {!this.state.edit && (
          <List
            data-test="listComponent"
            className="list"
            eventData={eventsCopy}
            currentQuery={this.state.currentQuery}
            edit={this.handleEdit}
          />
        )}
        <StyledAppDiv className="page-selector">
          {this.state.events.length > 2 && (
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
          )}
        </StyledAppDiv>
      </StyledAppWrapper>
    );
  }
}

export default App;
