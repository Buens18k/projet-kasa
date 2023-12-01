import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../components/Header.jsx';
import ErrorMessage from '../components/Error404.jsx';
import Footer from '../components/Footer.jsx';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Header />
      <ErrorMessage />
      <Footer />
    
    </>
  );
}
