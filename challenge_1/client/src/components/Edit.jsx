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
    let name = e.target.name;
    let editIndex = +e.target.dataset.index;
    let value = e.target.value;
    let newEvent = this.state.events[editIndex];
    newEvent.event[name] = value;

    let newState = this.state.events.map((event, index) => {
      if (index === editIndex) {
        return newEvent;
      }
      return event;
    });
    this.setState({ events: newState });
  }

  componentDidMount() {
    this.setState({
      events: this.props.eventData
    });
  }

  render() {
    const eventStart = this.state.events.slice();
    const inputs = eventStart.map((event, index) => {
      return (
        <StyledInputWrapper key={index}>
          <StyledDateInput
            type="text"
            name="date"
            data-index={index}
            defaultValue={event.event.date}
            onChange={this.handleChange}
          ></StyledDateInput>
          <StyledTextArea
            type="text"
            name="description"
            data-index={index}
            defaultValue={event.event.description}
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
