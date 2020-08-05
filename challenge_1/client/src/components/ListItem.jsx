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

const StyledPWrapper = styled.div`
  max-width: 60vw;
  overflow-x: hidden;
`;
const StyledP = styled.p`
  display: inline-block;
  margin: 0;
  text-indent: 2rem;
  max-width: 60vw;
  min-width: 60vw;
`;

const ListItem = (props) => {
  return (
    <StyledListItem>
      <StyledH4>Year: {props.event.date} ></StyledH4>
      <StyledPWrapper>
        <StyledP>{props.event.description}</StyledP>
      </StyledPWrapper>
    </StyledListItem>
  );
};

export default ListItem;
