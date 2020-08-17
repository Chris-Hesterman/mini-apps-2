import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { StyledForm, StyledInput, StyledButton } from '../styles.js';
import PropTypes from 'prop-types';

class RangeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const endOrStart = e.target.classList[e.target.classList.length - 1];
    console.log(endOrStart);

    this.setState({ [endOrStart]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const start = moment(this.state.start).format('YYYY-MM-DD');
    const end = moment(this.state.end).format('YYYY-MM-DD');

    this.props.getRange(start, end);
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput
          value={this.state.start}
          type="text"
          className="start"
          placeholder="Enter start date after 7/17/2010"
          onChange={this.handleChange}
          autoFocus
        ></StyledInput>
        <StyledInput
          value={this.state.end}
          type="text"
          className="end"
          placeholder="Enter end date"
          onChange={this.handleChange}
        ></StyledInput>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    );
  }
}

RangeInput.propTypes = {
  getRange: PropTypes.func
};

export default RangeInput;
