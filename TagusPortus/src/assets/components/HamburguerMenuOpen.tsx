import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import activeStyles from './ActiveStyles';
import scrollToTop from './ScrollToTop.tsx';

//Active State of the Hamburguer Menu
const HamburgerMenu: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const closeMenu = () => setIsOpen(false)

    // Handle two click functions
    const handleLinkClick = () => {
        closeMenu()
        scrollToTop()
    };

    //Close navbar if the user presses outside of the navbar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const navbar = document.getElementById("navbar");
            const hamburgerButton = document.querySelector('.hamburger-button');
            if (
                navbar &&
                !navbar.contains(event.target as Node) &&
                hamburgerButton &&
                !hamburgerButton.contains(event.target as Node)
            ) {
                closeMenu()
            } else if (hamburgerButton.contains(event.target as Node)) {
                closeMenu()
            }
        }

        // Add event listener to the whole document
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener on component unmount or when `isOpen` changes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="hamburger-menu">
            <div
                className="hamburguer-button">
                <Hamburger
                    toggled={isOpen}
                    toggle={setIsOpen}
                    color="#774936"
                    easing="ease-in"
                    rounded
                    label="Show navigation bar"
                />
            </div>


            <div id='navbar' className={`hamburguer-navbar-content ${isOpen ? 'open' : ''}`}>
                <div className='button-wrapper'>
                </div>
                <nav>
                    <ul className="hamburguer-navigation">
                        <li>
                            <NavLink
                                to="/"
                                end
                                style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                onClick={handleLinkClick}
                            >
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                onClick={handleLinkClick}
                            >
                                Quem Somos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/works"
                                style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                onClick={handleLinkClick}
                            >
                                As Nossas Obras
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                onClick={handleLinkClick}
                            >
                                Serviços
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Contacts"
                                style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                onClick={handleLinkClick}
                            >
                                Contactos
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="hamburguer-navigation">
                        <li>
                            <NavLink
                                to="/Privacy-Policies"
                                style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                onClick={closeMenu}
                            >
                                Política de Privacidade
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Legal-Warnings"
                                style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                onClick={closeMenu}
                            >
                                Aviso Legal
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Cookies-Policies"
                                style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                onClick={closeMenu}
                            >
                                Política de Cookies
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HamburgerMenu;