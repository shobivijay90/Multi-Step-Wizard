import styled from 'styled-components';
import React, { useState } from 'react';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`;

interface StateSelectProps {
  onChange: (selectedOption: { label: string; value: string } | null) => void;
  value: { label: string; value: string } | null;
}

const StateSelect: React.FC<StateSelectProps> = ({ onChange, value }) => {
  // Define your options (list of states) here
  const options = [
    { value: 'NY', label: 'New York' },
    { value: 'CA', label: 'California' },
    {value: 'TX', label: 'Texas'},
    {value: 'FL', label: 'Florida'},
    {value: 'SE', label: 'seattle'}
    // Add more states as needed
  ];

  return (
    <StyledSelect
      options={options}
      onChange={onChange}
      value={value}
      isSearchable
      placeholder="Select a state..."
    />
  );
};

export default StateSelect;