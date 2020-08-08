import React from 'react';
import styled from 'styled-components';
import { StyledEditButton } from './List/List.css.js';

const StyledEditForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledDateInput = styled.input`
  border-radius: 4px;
  border: 2px solid #d1913c;
  background: rgba(230, 230, 230, 0.5);
  &:hover {
    background: lightpink;
  }
`;

const StyledTextArea = styled.textarea`
  margin-bottom: 10px;
  border-radius: 4px;
  border: 2px solid #d1913c;
  background: rgba(230, 230, 230, 0.5);
  outline: none;
  &:hover {
    background: lightpink;
  }
`;

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.save(this.state.events);
  }

  handleChange(e) {
    console.log('ok');
    let newEvents = this.state.events.slice();
    let name = e.target.name;
    let index = +e.target.dataset[name];
    let value = e.target.value;

    newEvents[index][name] = value;
    this.setState({ events: newEvents });
  }

  componentDidMount() {
    this.setState({
      events: this.props.events
    });
  }

  render() {
    const inputs = this.props.events.map((event, index) => {
      return (
        <StyledInputWrapper key={index}>
          <StyledDateInput
            type="text"
            name="date"
            data-date={`${index}`}
            defaultValue={event.date}
            onChange={this.handleChange}
          ></StyledDateInput>
          <StyledTextArea
            type="text"
            name="description"
            data-description={index}
            defaultValue={event.description}
            rows="5"
            cols="100"
            onChange={this.handleChange}
          ></StyledTextArea>
        </StyledInputWrapper>
      );
    });
    return (
      <div>
        <StyledEditForm onSubmit={this.handleSubmit}>
          {inputs}
          <StyledEditButton type="submit">Save Edits</StyledEditButton>
        </StyledEditForm>
      </div>
    );
  }
}

export default Edit;
