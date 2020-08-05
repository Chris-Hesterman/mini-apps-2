import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background: rgba(230, 230, 230, 0.5);
  border-color: #d1913c;
  font-size: 18px;
  height: 25px;
  width: 175px;
  outline: none;
  margin-bottom: 40px;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  box-sizing: border-box;
  padding: 4px;
  margin-left: 25px;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #d1913c;
  border-radius: 5px;
  box-shadow: 2px 2px 2px grey;
  outline: none;
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 1px grey;
  }
`;
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
    console.log(this.state.inputValue);
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.send(this.state.inputValue);
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
