import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useFormData } from "../context/FormDataContext";
import AutocompleteSelect from "./StateSelect";

const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Styledh1 = styled.h1`
  text-align: center;
`;
const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;
const MyButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 20px;
`;

const Preview = () => {
  const router = useRouter();
  const { formData } = useFormData();
  const selectedState = router.query.selectedState as string;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/submit");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <StyledForm>
        <Styledh1>Preview Details</Styledh1>
        <div>
          <h3>First Name: </h3><span>{formData.firstName}</span>
        </div>
        <div>
          <h3>last Name: </h3><span>{formData.lastName}</span>
        </div>
        <div>
          <h3>Age: </h3><span>{formData.age}</span>
        </div>
        <div>
          <h3>Email: </h3><span>{formData.email}</span>
        </div>
        <div>
          <h3>Phone Number: </h3><span>{formData.phoneNumber}</span>
        </div>
        <div>
          <h3>Address 1: </h3><span>{formData.address1}</span>
        </div>
        <div>
          <h3>City: </h3><span>{formData.city}</span>
        </div>
        <div>
          <h3>State: </h3><span>{selectedState}</span>
        </div>
        <div>
          <h3>Zip Code: </h3><span>{formData.zipCode}</span>

        </div>
        <MyButton>
          <StyledButton type="submit" onClick={handleGoBack}>
            Back
          </StyledButton>
          <StyledButton type="submit" onClick={handleSubmit}>
            Submit
          </StyledButton>
        </MyButton>
      </StyledForm>
    </div>
  );
};

export default Preview;
