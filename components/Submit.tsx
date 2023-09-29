import React from 'react'
import styled from 'styled-components';

const StyledBanner = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 16px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}`;

const Styledh1 = styled.h1`
   text-align: center;
   margin-top: 50px;
`;

const Submit = () => {
  return (
   <StyledBanner>
      <Styledh1>Form Submitted Sucessfully!</Styledh1>
    </StyledBanner>
  )
}

export default Submit
