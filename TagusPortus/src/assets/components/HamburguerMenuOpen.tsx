import { useState } from 'react'
import Hamburguer from 'hamburger-react'

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
            <div className="hamburger-menu">

                <div className='hamburguer-button'>
                    <Hamburguer
                        toggled={isOpen}
                        toggle={setIsOpen}
                        color="#774936"
                        easing="ease-in"
                        rounded
                        label="Show navigation bar"
                    />
                </div>

                <div className={`hamburguer-navbar-content ${isOpen ? 'open' : ''}`}>
                    <ul className='hamburguer-navigation'>
                        <li>Início</li>
                        <li>Quem Somos</li>
                        <li>As Nossas Obras</li>
                        <li>Serviços</li>
                        <li>Contactos</li>
                    </ul>
                    <ul className='hamburguer-navigation'>
                        <li>Política de Privacidade</li>
                        <li>Aviso Legal</li>
                        <li>Política de Cookies</li>
                    </ul>
                </div>
            </div>
    )
}

export default HamburgerMenu