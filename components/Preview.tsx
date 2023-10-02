import { Styledh2 } from '../GlobalStyles';
import { StyledForm } from "../GlobalStyles";
import { StyledFlex } from '../GlobalStyles';
import { MyButton } from "../GlobalStyles";
import { StyledButton } from "../GlobalStyles";
import React from "react";
import { useRouter } from "next/router";
import { useFormData } from "../context/FormDataContext";

const Preview = () => {
  const router = useRouter();
  const { formData } = useFormData();
  const selectedState = router.query.selectedState as string;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/submit");
  };

  const handleGoBack = (e: React.FormEvent) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div>
      <Styledh2>Registration Form</Styledh2>
      <StyledForm>
        <h3>Preview details</h3>
        <StyledFlex>
          <div>
            <h3>First Name: </h3>
            <p>{formData.firstName}</p>
          </div>
          <div>
            <h3>Last Name: </h3>
            <p>{formData.lastName}</p>
          </div>
          <div>
            <h3>Age: </h3>
            <p>{formData.age}</p>
          </div>
          <div>
            <h3>Email: </h3>
            <p>{formData.email}</p>
          </div>
          <div>
            <h3>Phone Number: </h3>
            <p>{formData.phoneNumber}</p>
          </div>
          <div>
            <h3>Street: </h3>
            <p>{formData.street}</p>
          </div>
          <div>
            <h3>City: </h3>
            <p>{formData.city}</p>
          </div>
          <div>
            <h3>State: </h3>
            <p>{selectedState}</p>
          </div>
          <div>
            <h3>Zip Code: </h3>
            <p>{formData.zipCode}</p>
          </div>
        </StyledFlex>
        <MyButton>
          <StyledButton type="submit" onClick={handleGoBack}>
            Previous
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
