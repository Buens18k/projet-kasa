import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HeaderFooterLayout() {
  return (
    <>
      <Header />
      {/* Utilise le composant 'Outlet' pour afficher le contenu des routes enfants entre le 'Header' et 'Footer' */}
      <Outlet />
      <Footer />
    </>
  );
}
