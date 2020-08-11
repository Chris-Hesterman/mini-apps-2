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
    this.putEvents = this.putEvents.bind(this);
  }

  getEventPage(query, page = 1) {
    const getURL = `/events?q=${query}&page=${page}&limit=4`;
    console.log('hitting get request');
    axios
      .get(getURL)
      .then((response) => {
        let pageCount = response.data.totalPages;
        console.log('axios', response);
        this.setState({
          events: response.data.docs,
          currentQuery: query,
          currentPage: page,
          pageCount: pageCount
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  putEvents(data) {
    this.setState({ events: data, edit: false });
    console.log('Made it to put', data);

    axios
      .put(`/events`, data)
      .then((response) => {
        console.log('events updated!:', response.config.data);
      })
      .catch((err) => {
        console.log('Sorry, did not get saved. Please try again');
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
      <StyledAppWrapper>
        <GlobalStyle />
        <Title />
        <Search send={this.getEventPage} />
        {this.state.edit ? (
          <Edit
            done={this.handleEdit}
            eventData={eventsCopy}
            save={this.saveEdit}
          />
        ) : (
          <List
            eventData={eventsCopy}
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
