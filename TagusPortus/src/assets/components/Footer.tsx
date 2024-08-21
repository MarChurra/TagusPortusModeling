import activeStyles from './ActiveStyles'
import { NavLink, Link } from 'react-router-dom'

//App Footer

interface FooterProps {
  isLargeViewPort: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLargeViewPort }) => {

  return (
    <>
      {isLargeViewPort ? (
        <footer className="app-footer">
          <nav className="footer-navigation">
            <ul>
              <NavLink
                className={"policies-links"}
                to="/Privacy-Policies"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Política de Privacidade
              </NavLink>
              <NavLink
                className={"policies-links"}
                to="/Cookies-Policies"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Política de Cookies
              </NavLink>
              <NavLink
                className={"policies-links"}
                to="/Privacy-Policies"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Política de Privacidade
              </NavLink>
            </ul>
          </nav>
          <a href="https://www.churradesigns.com/" target='_blank'>
            Marco Churra 2024
          </a>
        </footer >
      ) : <footer className="app-footer">
        <a href="https://www.churradesigns.com/" target='_blank'>
          Marco Churra 2024
        </a>
      </footer >
      }
    </>
  )
}

export default Footer