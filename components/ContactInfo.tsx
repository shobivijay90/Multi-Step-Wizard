import { Styledh2 } from '../GlobalStyles';
import { StyledForm } from "../GlobalStyles";
import { StyledLabel } from "../GlobalStyles";
import { StyledInput } from "../GlobalStyles";
import { StyledFormRequired } from "../GlobalStyles";
import { MyButton } from "../GlobalStyles";
import { StyledButton } from "../GlobalStyles";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useFormData } from "../context/FormDataContext";


const ContactInfo: React.FC = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phoneNumber:'',
    street: '',
    city: '',
    state: '',
    zipCode: ''
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

  const handleGoBack = (e: React.FormEvent) => {
    e.preventDefault();
    router.back();
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      window.alert("Please enter a valid Phone Number.");
      return;
    }
    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      window.alert("Please enter a valid email.");
      return;
    }
    if (formData.phoneNumber && formData.email) {
      router.push("/address-info");
    } else {
      window.alert("Please fill in all fields.");
      return;
    }
   
  };

  return (
    <div>
      <Styledh2>Registration Form</Styledh2>
      <StyledForm>
        <h3>Contact details</h3>
        <div>
          <StyledLabel>Email <StyledFormRequired>*</StyledFormRequired></StyledLabel>
          <StyledInput
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <StyledLabel>Phone Number <StyledFormRequired>*</StyledFormRequired></StyledLabel>
          <StyledInput
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>
        <MyButton>
        <StyledButton type="submit" onClick={resetForm}>
            Reset
          </StyledButton>
          <StyledButton onClick={handleGoBack}>Previous</StyledButton>
          <StyledButton type="submit" onClick={handleSubmit}>
            Next
          </StyledButton>
        </MyButton>
      </StyledForm>
    </div>
  );
};

export default ContactInfo;
