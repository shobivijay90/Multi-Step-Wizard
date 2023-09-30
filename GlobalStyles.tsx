import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const Styledh2 = styled.h2`
  text-align: center;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
  display: block;
`;
export const StyledInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`;
 export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #0056b3;
  }
`;

export const MyButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 20px;
  gap: 10px;
`;

export const StyledFormRequired = styled.span`
    font-size: smaller;
    color: red; 
`;

export const StyledFlex = styled.div`
  div {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;