import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormData } from "../context/FormDataContext";
import { Styledh2 } from '../GlobalStyles';
import { StyledForm } from "../GlobalStyles";
import { StyledLabel } from "../GlobalStyles";
import { StyledInput } from "../GlobalStyles";
import { StyledFormRequired } from "../GlobalStyles";
import { MyButton } from "../GlobalStyles";
import { StyledButton } from "../GlobalStyles";


const PersonalInfo: React.FC = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    age: 18,
    email: "",
    phoneNumber: "",
    address1: "",
    city: "",
    state: "",
    zipCode: "",
  };
  const { formData, setFormData } = useFormData();
  const router = useRouter();

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
  const resetForm = () => {
    setFormData(initialFormData);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.age > 100 || formData.age < 1) {
      window.alert("Please enter a valid age.");
      return;
    }
    if (formData.firstName && formData.lastName && formData.age) {
      router.push("/contact-info");
    } else {
      window.alert("Please fill in all fields.");
      return;
    }
  };
  return (
    <div>
      <Styledh2>Registration Form</Styledh2>
      <StyledForm>
        <h3>Personal details</h3>
        <div>
          <StyledLabel>First Name <StyledFormRequired>*</StyledFormRequired></StyledLabel>
          <StyledInput
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <StyledLabel>Last Name <StyledFormRequired>*</StyledFormRequired></StyledLabel>
          <StyledInput
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <StyledLabel>Age <StyledFormRequired>*</StyledFormRequired></StyledLabel>
          <StyledInput
            type="number"
            name="age"
            min="18"
            max="100"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <MyButton>
          <StyledButton type="submit" onClick={resetForm}>
            Reset
          </StyledButton>
          <StyledButton type="submit" onClick={handleSubmit}>
            Next
          </StyledButton>
        </MyButton>
      </StyledForm>
    </div>
  );
};

export default PersonalInfo;
