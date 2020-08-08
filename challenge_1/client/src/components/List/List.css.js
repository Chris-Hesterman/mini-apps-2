import styled from 'styled-components';

// List.jsx styles--------
export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  margin: 0 20vw;
  padding: 0;
`;

export const StyledListH3 = styled.h3`
  width: 100%;
  text-align: left;
`;

export const StyledListItemWrapper = styled.div`
  width: 100%;
`;

export const StyledListLine = styled.hr`
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

export const StyledListDiv = styled.div`
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledEditButton = styled.button`
  box-sizing: border-box;
  padding: 6px 5px 4px 5px;
  height: 32px;

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
