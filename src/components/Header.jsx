import { NavLink } from 'react-router-dom';
import logo from '../assets/LOGO.png';

import '../styles/layouts/Header.scss';

function Header() {
  return (
    <header>
        <img src={logo} alt="Logo KASA" />
      <nav>
        <ul>
            <li>
                <NavLink>Accueil</NavLink>
            </li>
            <li>
                <NavLink>À Propos</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
