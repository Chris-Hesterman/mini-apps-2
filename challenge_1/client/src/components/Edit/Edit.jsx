import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledEditButton } from '../List/List.css.js';
import {
  StyledEditForm,
  StyledDateInput,
  StyledInputWrapper,
  StyledTextArea
} from './Edit.css.js';

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

Edit.propTypes = {
  done: PropTypes.func,
  eventData: PropTypes.array,
  save: PropTypes.func
};

export default Edit;
