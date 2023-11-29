// import { Form } from "react-router-dom"
import logo from '../../assets/LOGO.png'
import '../../utils/style/Home/Header/Header.scss'

function Header () {
    return (
        <header>
            <div>
                <img src={logo} alt="Logo KASA" />
            </div>
            <nav>
                <a href="">Accueil</a>
                <a href="">À Propos</a>
            </nav>
        </header>
    )
}

export default Header