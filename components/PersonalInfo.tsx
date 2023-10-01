import React, { useEffect, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { useFormData } from "../context/FormDataContext";
import { Styledh2 } from "../GlobalStyles";
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
    age: '',
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
    return () => {
      localStorage.removeItem("formData");
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    localStorage.setItem(
      "formData",
      JSON.stringify({ ...formData, [name]: value })
    );
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName.length < 2 || formData.firstName.length > 50 || !/^[A-Za-z ]+$/.test(formData.firstName)) {
      window.alert("Please enter a valid First Name.");
      return;
    }
    if (formData.lastName.length < 2 || formData.lastName.length > 50 || !/^[A-Za-z ]+$/.test(formData.lastName)) {
      window.alert("Please enter a valid Last Name.");
      return;
    }
     const numericAge = parseInt(formData.age, 10);
    if (numericAge > 100 || numericAge < 1) {
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
          <StyledLabel>
            First Name <StyledFormRequired>*</StyledFormRequired>
          </StyledLabel>
          <StyledInput
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            required
          />
        </div>
        <div>
          <StyledLabel>
            Last Name <StyledFormRequired>*</StyledFormRequired>
          </StyledLabel>
          <StyledInput
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />
        </div>
        <div>
          <StyledLabel>
            Age <StyledFormRequired>*</StyledFormRequired>
          </StyledLabel>
          <StyledInput
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter age (1 - 100)"
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