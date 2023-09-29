import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import StateSelect from "./StateSelect";
import { useFormData } from "../context/FormDataContext";

const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Styledh2 = styled.h2`
  text-align: center;
`;
const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
  display: block;
`;
const StyledInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
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

const AddressInfo: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const router = useRouter();

  const [selectedState, setSelectedState] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const handleSelectChange = (
    selectedState: { label: string; value: string } | null
  ) => {
    setSelectedState(selectedState);
  };

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, [setFormData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    localStorage.setItem(
      "formData",
      JSON.stringify({ ...formData, [name]: value })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.address1 && formData.city && formData.zipCode) {
      router.push({
        pathname: "/preview",
        query: { selectedState: selectedState?.value || "" },
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <Styledh2>Registration Form</Styledh2>
      <StyledForm>
        <h3>Address Details</h3>
        <div>
          <StyledLabel>Address 1:</StyledLabel>
          <StyledInput
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <StyledLabel>City:</StyledLabel>
          <StyledInput
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <StyledLabel>State:</StyledLabel>
            <StateSelect onChange={handleSelectChange} value={selectedState} />
        </div>
        <div>
          <StyledLabel>Zip Code:</StyledLabel>
          <StyledInput
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <MyButton>
          <StyledButton type="submit" onClick={handleGoBack}>
            Back
          </StyledButton>
          <StyledButton type="submit" onClick={handleSubmit}>
            Next
          </StyledButton>
        </MyButton>
      </StyledForm>
    </div>
  );
};

export default AddressInfo;
