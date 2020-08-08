import styled from 'styled-components';

// Search.jsx styles ------
export const StyledInput = styled.input`
  background: rgba(230, 230, 230, 0.5);
  border-color: #d1913c;
  font-size: 18px;
  height: 25px;
  width: 175px;
  outline: none;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  box-sizing: border-box;
  padding: 6px 5px 4px 5px;
  margin-left: 25px;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #d1913c;
  border-radius: 5px;
  background: rgba(230, 230, 230, 0.5);
  box-shadow: 2px 2px 2px grey;
  outline: none;
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 1px grey;
  }
`;
