import React from 'react'
import "./header.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const Header = () => {
    return (
        <div className='header'>

             <h4>Centro Vecinal Villa Belgrano</h4>
             <nav className='nav'>
                 <ul>
                   
                     <Link to="/inicio"> Inicio  </Link>
                     <Link to="/historia"> Historia</Link>
                     <Link to="/ubicacion"> Ubicación </Link>
                     <Link to="/actividades"> Actividades </Link>
                     
                 </ul>
             </nav>
        </div>
    )
}

export default Header
