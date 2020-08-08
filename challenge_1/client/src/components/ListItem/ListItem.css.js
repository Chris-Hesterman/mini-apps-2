import styled from 'styled-components';

// ListItem.jsx styles --------
export const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(230, 230, 230, 0.5);
  border-radius: 10px;
  padding: 5px;
`;

export const StyledItemH4 = styled.h4`
  margin: 0 0 10px 0;
`;

export const StyledItemPWrapper = styled.div`
  max-width: 60vw;
  overflow-x: hidden;
`;

export const StyledItemP = styled.p`
  display: inline-block;
  margin: 0;
  text-indent: 2rem;
  max-width: 60vw;
  min-width: 60vw;
`;
