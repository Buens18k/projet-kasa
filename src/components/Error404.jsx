import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { isRouteErrorResponse } from 'react-router-dom';

import style from '../styles/layouts/_error.module.scss';
import Main from './Main';

export default function ErrorMessage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Main>
        <div className={style.ctaErrorMsg}>
          <h1 className={style.ctaErrorMsg__title}>{error.status}</h1>
          <p className={style.ctaErrorMsg__message}>Oups! La page que vous demandez n'existe pas.</p>
          <Link className={style.ctaErrorMsg__link} to={'/'}>Retourner sur la page d'accueil</Link>
        </div>
      </Main>
    );
  }
}
