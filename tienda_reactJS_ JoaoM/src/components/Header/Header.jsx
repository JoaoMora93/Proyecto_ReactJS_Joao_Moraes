import './Header.scss'



export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <a href="#"><img className="header__logo" src="../logo/logo.jpeg" alt="logo" /></a>

                <nav className="navbar">
                    <a className="navbar__link" href="#">Enlace 1</a>
                    <a className="navbar__link" href="#">Enlace 2</a>
                    <a className="navbar__link" href="#">Enlace 3</a>
                </nav>
            </div>
        </header>
    )
}