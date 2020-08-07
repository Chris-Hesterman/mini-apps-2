import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-bottom: 50px;
`;

const StyledInput = styled.input`
  margin-bottom: 30px;
  height: 20px;
  width: 200px;
  outline: none;
  background: beige;
  border-radius: 3px;
`;

const StyledButton = styled.button`
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
    // console.log(moment('2-22-69').format('YYYY-MM-DD'));
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

export default RangeInput;
