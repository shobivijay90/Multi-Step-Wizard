import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFormData } from '../context/FormDataContext';

const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Styledh2 = styled.h2`
   text-align: center
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


const ContactInfo: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const router = useRouter();

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, [setFormData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    localStorage.setItem('formData', JSON.stringify({ ...formData, [name]: value }));
  };

  const handleGoBack = (e: React.FormEvent) => {
    e.preventDefault();
    router.back();
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^\d{10}$/.test(formData.phoneNumber) && /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
      router.push('/address-info');
    } else {
      alert('Please enter a valid phone number and email address.');
    }
  };

  return (
    <div>
      <Styledh2>Registration Form</Styledh2>
      <StyledForm>
        <h3>Contact details</h3>
        <div>
          <StyledLabel>Email:</StyledLabel>
          <StyledInput
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <StyledLabel>Phone Number:</StyledLabel>
          <StyledInput
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <MyButton>
        <StyledButton onClick={handleGoBack}>Previous</StyledButton>
        <StyledButton type="submit" onClick={handleSubmit}>Next</StyledButton>
        </MyButton>
      </StyledForm>
    </div>
  );
};

export default ContactInfo;