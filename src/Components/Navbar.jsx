import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import {routes} from '../Routes/Routess'
import SwitchButton from "../Components/ButtonTheme";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  return (
    <nav className="nav-content">
        <div className="nav-logo"> DH ODONTO</div>
        <div className="menu">
            <div className='menuitems'>
              <Link to={routes.home}>Home</Link>
              <Link to={routes.contact}>Contact</Link>
              <Link to={routes.favs}> Favs</Link>
              <SwitchButton />
            </div>
        </div>
    </nav>
  )
}
export default Navbar

