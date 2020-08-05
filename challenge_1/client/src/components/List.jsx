import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem.jsx';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  margin: 0 20vw;
  padding: 0;
`;

const StyledH3 = styled.h3`
  width: 100%;
  text-align: left;
`;

const StyledItemWrapper = styled.div`
  width: 100%;
`;

const StyledLine = styled.hr`
  width: 100%;
  border: none;
  height: 2px;
  background: rgb(255, 209, 148);
  background: linear-gradient(
    90deg,
    rgba(255, 209, 148, 0) 0%,
    rgba(209, 145, 60, 1) 30%,
    rgba(209, 145, 60, 1) 70%,
    rgba(255, 209, 148, 0) 100%
  );
`;

const List = (props) => {
  const events = props.events.map((event, index) => {
    return (
      <StyledItemWrapper>
        <ListItem event={event} key={index} />
        <StyledLine />
      </StyledItemWrapper>
    );
  });
  return (
    <StyledList>
      {props.currentQuery.length > 0 && (
        <StyledH3>Current subject: {props.currentQuery}</StyledH3>
      )}
      {events}
    </StyledList>
  );
};

export default List;
