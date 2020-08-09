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

  putEvents(data, ids) {
    this.setState({ events: data, edit: false });
    let reqDescriptions = ids.map((id, index) => {
      axios.put(
        `http:127.0.0.1:3000/events?q=${JSON.stringify(id)}`,
        data[index]
      );
    });
    Promise.all(reqDescriptions)
      .then(() => {
        alert('Edits saved!');
      })
      .catch((err) => {
        console.log('Sorry, did not get saved. Please try again');
      });
  }

  // addIdsToDB() {
  //   axios
  //     .get('http:127.0.0.1:3000/events')
  //     .then((response) => {
  //       const dataWithIds = response.data.forEach((event, index) => {
  //         event.id = index;
  //       });
  //       return dataWithIds;
  //     })
  //     .then((data) => {
  //       let posts = data.map((item) => {
  //         return axios.post();
  //       });
  //     });
  // }

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

  saveEdit(data, original) {
    const idOriginal = [];
    const changedData = data.filter((event, index) => {
      const newShortDesc = event.description.slice(0, 40);

      if (newShortDesc !== original[index]) {
        idOriginal.push(original[index]);
        return event;
      }
    });
    console.log('Trimmed', changedData);
    console.log('Ids', idOriginal);
    this.putEvents(changedData, idOriginal);
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
