// context/FormDataContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the form data
interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  phoneNumber: string;
  address1: string;
  city: string;
  state: string;
  zipCode: string;
}

// Create the context
interface FormDataContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

// Create a provider component to wrap your app with
export const FormDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phoneNumber:'',
    address1: '',
    city: '',
    state: '',
    zipCode: ''
    // Initialize other fields
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Custom hook to access the context
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
