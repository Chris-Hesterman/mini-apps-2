import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

ListItem.propTypes = {
  event: PropTypes.object
};

export default ListItem;
