import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../components/Header.jsx';
import ErrorMessage from '../components/Error404.jsx';
import Footer from '../components/Footer.jsx';

export default function ErrorPage() {
  // Récupère le code erreur avec le hook 'useRouteError'
  const error = useRouteError();
  // Controle pour le débogage
  console.log(error);

  return (
    <>
      <Header />
      {/* Appel du compoosant en lui passant en prop l'objet 'error' */}
      <ErrorMessage error={error}/>
      <Footer />
    </>
  );
}
