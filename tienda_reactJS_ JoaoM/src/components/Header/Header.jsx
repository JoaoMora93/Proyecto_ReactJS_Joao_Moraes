import './Header.scss'
import './Header.css'
import { Link } from 'react-router-dom'


export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <Link className='hover:outline-none hover:ring-2 hover:ring-purple-600 hover:shadow-xl' to="/"><img className="header__logo" src="../logo/_navbar_logo.jpeg" alt="logo" /></Link>

                <nav className="navbar">
                    <Link className="navbar__link hover:bg-violet-400" to="/">Inicio</Link>
                    <Link className="navbar__link hover:bg-violet-400" to="/productos">Productos</Link>
                    <Link className="navbar__link hover:bg-violet-400" to="/productos/combo_sahumador">Combos</Link>
                    <Link className="navbar__link hover:bg-violet-400" to="/productos/sahumadores">Sahumadores</Link>
                    <Link className="navbar__link hover:bg-violet-400" to="/productos/aguaflorida">Aguaflorida</Link>
                    <Link className="navbar__link hover:bg-violet-400" to="#">Contacto</Link>
                </nav>

            </div>
        </header>
    )
}