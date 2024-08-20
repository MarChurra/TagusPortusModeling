import { NavLink, Link } from 'react-router-dom'
import activeStyles from './ActiveStyles'
import HamburgerMenu from './HamburguerMenuOpen'

//Viewport prop from the App Layout determines whether to render a larger navbar or a smaller navbar with an hamburguer menu 
interface NavbarProps {
    isLargeViewPort: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLargeViewPort }) => {

    return (
        <>
            {isLargeViewPort ? (
                <header className="navigation-menu-lg">
                    <Link className="logo-link" to="/">
                        <img className="logo" src="/icons/logo.svg" alt="Tagus Portus Logo" />
                    </Link>
                    <nav>
                        <ul className="navigation-lg-screen">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                >
                                    Início
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/About"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                >
                                    Quem Somos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Works"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                >
                                    As Nossas Obras
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Services"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                >
                                    Serviços
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Contacts"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
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
                        <img className="logo" src="/icons/logo.svg" alt="Tagus Portus Logo" />
                    </Link>
                    <HamburgerMenu />
                </header>}
        </>
    )
}

export default Navbar