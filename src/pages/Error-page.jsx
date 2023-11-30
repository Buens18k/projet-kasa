import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../components/Header.jsx';
import ErrorMessage from '../components/Error404.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/layouts/Error.scss';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <Header />
      <ErrorMessage />
      <Footer />
      {/* <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
}
