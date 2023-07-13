import './Header.scss'
import './Header.css'


export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <a href="#"><img className="header__logo" src="../logo/_navbar_logo.jpeg" alt="logo" /></a>

                <nav className="navbar">
                    <a className="navbar__link" href="#">Inicio</a>
                    <a className="navbar__link" href="#">Productos</a>
                    <a className="navbar__link" href="#">Contacto</a>
                </nav>

            </div>
        </header>
    )
}