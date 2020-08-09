import React from 'react';
import styled from 'styled-components';
import {
  StyledListItem,
  StyledItemH4,
  StyledItemPWrapper,
  StyledItemP
} from './ListItem.css.js';

const ListItem = (props) => {
  return (
    <StyledListItem>
      <StyledItemH4>Year: {props.event.date}</StyledItemH4>
      <StyledItemPWrapper>
        <StyledItemP>{props.event.description}</StyledItemP>
      </StyledItemPWrapper>
    </StyledListItem>
  );
};

export default ListItem;
