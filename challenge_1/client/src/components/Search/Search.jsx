import React from 'react';
import styled from 'styled-components';
import { StyledInput, StyledButton } from './Search.css.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.send(this.state.inputValue, 1);
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <StyledInput
            value={this.state.inputValue}
            type="text"
            onChange={this.onChange}
            placeholder="Enter search term"
            autoFocus
          />
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </div>
    );
  }
}

export default Search;
