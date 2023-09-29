import React from 'react';
import { AppProps } from 'next/app';
import { FormDataProvider } from '../context/FormDataContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormDataProvider>
      <Component {...pageProps} />
    </FormDataProvider>
  );
}

export default MyApp;
