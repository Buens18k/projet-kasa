import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { isRouteErrorResponse } from 'react-router-dom';

export default function ErrorMessage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={"/"}>Retourner sur la page d'accueil</Link>
      </div>
    );
  }
}
