
import { Outlet } from "react-router-dom"
import NavbarSmlScreen from "./NavBarSmlScreen"

function AppLayout() {

  return (
    <div className="content-container">
      <NavbarSmlScreen />
      <Outlet />
    </div>
  )
}

export default AppLayout
