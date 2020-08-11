import styled from 'styled-components';

export const StyledEditForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StyledDateInput = styled.input`
  border-radius: 4px;
  border: 2px solid #d1913c;
  background: rgba(230, 230, 230, 0.5);
  &:hover {
    background: lightpink;
  }
`;

export const StyledTextArea = styled.textarea`
  margin-bottom: 10px;
  border-radius: 4px;
  border: 2px solid #d1913c;
  background: rgba(230, 230, 230, 0.5);
  font-size: 16px;
  outline: none;
  &:hover {
    background: lightpink;
  }
`;
