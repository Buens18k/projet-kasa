import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { isRouteErrorResponse } from 'react-router-dom';

import style from '../styles/layouts/_error.module.scss';

export default function ErrorMessage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className={style.ctaErrorMsg}>
        <h1>{error.status}</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={"/"}>Retourner sur la page d'accueil</Link>
      </div>
    );
  }
}
