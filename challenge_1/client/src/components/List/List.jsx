import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem.jsx';
import {
  StyledList,
  StyledListH3,
  StyledListItemWrapper,
  StyledListLine,
  StyledListDiv,
  StyledEditButton
} from './List.css.js';

const List = (props) => {
  const events = props.eventData.map((event, index) => {
    return (
      <StyledListItemWrapper key={event._id}>
        <ListItem event={event.event} />
        <StyledListLine />
      </StyledListItemWrapper>
    );
  });
  return (
    <StyledList>
      {props.currentQuery.length > 0 && (
        <StyledListDiv>
          <StyledListH3>Current subject: {props.currentQuery}</StyledListH3>
          <StyledEditButton onClick={(e) => props.edit(e)}>
            EditHistory
          </StyledEditButton>
        </StyledListDiv>
      )}
      {events}
    </StyledList>
  );
};

List.propTypes = {
  eventData: PropTypes.array,
  currentQuery: PropTypes.string,
  edit: PropTypes.func
};

export default List;
