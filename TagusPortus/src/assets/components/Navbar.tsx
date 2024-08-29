import { NavLink, Link } from 'react-router-dom'
import activeStyles from './ActiveStyles'
import HamburgerMenu from './HamburguerMenuOpen'
import scrollToTop from './ScrollToTop.tsx'

//Viewport prop from the App Layout determines whether to render a larger navbar or a smaller navbar with an hamburguer menu 
interface NavbarProps {
    isLargeViewPort: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLargeViewPort }) => {

    return (
        <>
            {isLargeViewPort ? (
                <header className="navigation-menu-lg">
                    <Link
                        className="logo-link"
                        to="/"
                        onClick={scrollToTop}
                    >

                        <img className="logo"
                            src="/icons/logo.svg"
                            alt="Tagus Portus Logo" />

                    </Link>
                    <nav>
                        <ul className="navigation-lg-screen">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                    onClick={scrollToTop}
                                >
                                    Início
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                    onClick={scrollToTop}
                                >
                                    Quem Somos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/works"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                    onClick={scrollToTop}
                                >
                                    As Nossas Obras
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                    onClick={scrollToTop}
                                >
                                    Serviços
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contacts"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                    onClick={scrollToTop}
                                >
                                    Contactos
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            ) :
                <header className="navigation-menu-sml">
                    <Link className='logo-link' to="/">
                        <img className="logo" src="/icons/logo.svg" alt="Tagus Portus Logo"
                            onClick={scrollToTop} />
                    </Link>
                    <HamburgerMenu />
                </header>}
        </>
    )
}

export default Navbar