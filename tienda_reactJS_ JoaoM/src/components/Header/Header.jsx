import './Header.scss'
import './Header.css'


export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <a className='hover:outline-none hover:ring-2 hover:ring-purple-600 hover:ring-offset-2 hover:shadow-xl' href="#"><img className="header__logo" src="../logo/_navbar_logo.jpeg" alt="logo" /></a>

                <nav className="navbar">
                    <a className="navbar__link hover:bg-violet-400" href="#">Inicio</a>
                    <a className="navbar__link hover:bg-violet-400" href="#">Productos</a>
                    <a className="navbar__link hover:bg-violet-400" href="#">Contacto</a>
                </nav>

            </div>
        </header>
    )
}