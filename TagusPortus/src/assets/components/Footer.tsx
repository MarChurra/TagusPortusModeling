import activeStyles from './ActiveStyles'
import { NavLink } from 'react-router-dom'

//App Footer

interface FooterProps {
  isLargeViewPort: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLargeViewPort }) => {

  return (
    <>
      {isLargeViewPort ? (

        <footer className="app-footer-lg">

          <nav className="footer-navigation">

            <ul className='socials-lg'>
              <li className='social-media-icon'>
                <a href="https://www.facebook.com/">
                  <img src="/icons/facebook.png" alt="Facebook Link" />
                </a>
              </li>
              <li className='social-media-icon'>
                <a href="https://www.instagram.com/">
                  <img src="/icons/instagram.png" alt="Instagram Link" />
                </a>
              </li>
              <li className='social-media-icon'>
                <a href="https://x.com/">
                  <img src="/icons/twitter.png" alt="X Link" />
                </a>
              </li>
            </ul>

            <ul className='policies-container'>
              <NavLink
                className={"policies-links"}
                to="/Privacy-Policies"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Política de Privacidade
              </NavLink>
              <NavLink
                className={"policies-links"}
                to="/Legal-Warnings"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Avisos Legais
              </NavLink>
              <NavLink
                className={"policies-links"}
                to="/Cookies-Policies"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Política de Cookies
              </NavLink>
            </ul>


            <a className='author' href="https://www.churradesigns.com/">
              Marco Churra 2024
            </a>

          </nav>

        </footer >
      ) :
        <footer className="app-footer">

          <nav className='social-media-nav'>
            <ul>
              <li className='social-media-icon'>
                <a href="https://www.facebook.com/">
                  <img src="/icons/facebook.png" alt="Facebook Link" />
                </a>
              </li>
              <li className='social-media-icon'>
                <a href="https://www.instagram.com/">
                  <img src="/icons/instagram.png" alt="Instagram Link" />
                </a>
              </li>
              <li className='social-media-icon'>
                <a href="https://x.com/">
                  <img src="/icons/twitter.png" alt="X Link" />
                </a>
              </li>
            </ul>
          </nav>

          <a className='author' href="https://www.churradesigns.com/">
            Marco Churra 2024
          </a>

        </footer >
      }
    </>
  )
}

export default Footer