import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(230, 230, 230, 0.5);
  border-radius: 10px;
  padding: 5px;
`;

const StyledH4 = styled.h4`
  margin: 0 0 10px 0;
`;

const StyledP = styled.p`
  margin: 0;
  text-indent: 2rem;
`;

const ListItem = (props) => {
  return (
    <StyledListItem>
      <StyledH4>Year: {props.event.date} ></StyledH4>
      <StyledP>{props.event.description}</StyledP>
    </StyledListItem>
  );
};

export default ListItem;
