import React from 'react';
import styled from 'styled-components';
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
  const events = props.events.map((event, index) => {
    return (
      <StyledListItemWrapper key={index}>
        <ListItem event={event} />
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

export default List;
