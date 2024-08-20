import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import activeStyles from './ActiveStyles';

//Active State of the Hamburguer Menu
const HamburgerMenu: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="hamburger-menu">
            <div className="hamburguer-button">
                <Hamburger
                    toggled={isOpen}
                    toggle={setIsOpen}
                    color="#774936"
                    easing="ease-in"
                    rounded
                    label="Show navigation bar"
                />
            </div>


            <div className={`hamburguer-navbar-content ${isOpen ? 'open' : ''}`}>
                <nav>
                    <ul className="hamburguer-navigation">
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

                    <ul className="hamburguer-navigation">
                        <li>
                            <NavLink
                                to="/privacy-policies"
                                style={({ isActive }) => (isActive ? activeStyles : undefined)}
                            >
                                Política de Privacidade
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/legal-warnings"
                                style={({ isActive }) => (isActive ? activeStyles : undefined)}
                            >
                                Aviso Legal
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/cookies-policies"
                                style={({ isActive }) => (isActive ? activeStyles : undefined)}
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