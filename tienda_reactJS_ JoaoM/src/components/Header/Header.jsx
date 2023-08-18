import './Header.scss'
import './Header.css'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/"><img className="header__logo" src="../logo/_navbar_logo.jpeg" alt="logo" /></Link>

                <nav className="navbar">
                    <Link className="navbar__link" to="/">Inicio</Link>
                    <Link className="navbar__link" to="/productos">Productos</Link>
                    <Link className="navbar__link" to="/productos/combo_sahumador">Combos</Link>
                    <Link className="navbar__link" to="/productos/sahumadores">Sahumadores</Link>
                    <Link className="navbar__link" to="/productos/aguaflorida">Aguaflorida</Link>
                    <Link className="navbar__link" to="#">Contacto</Link>
                    <CartWidget />
                </nav>

            </div>
        </header>
    )
}