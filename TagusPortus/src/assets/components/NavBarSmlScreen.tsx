import React from 'react'
import HamburgerMenu from './HamburguerMenuOpen'
import { Link } from 'react-router-dom'

//Navbar for smaler screens, with an hamburguer menu

const NavbarSmlScreen: React.FC = () => {
  return (
    <div className="navigation-menu-sml">
      <Link className='logo-link' to="/">
        <img className="logo" src="/icons/logo.svg" alt="Tagus Portus Logo" />
      </Link>
      <HamburgerMenu />
    </div>
  )
}

export default NavbarSmlScreen;