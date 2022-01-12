import React from 'react'
import "./main.css"
import logo from "../../assets/logo.png"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const Main = () => {
    return (
        <div className='main'>

            <Switch>
                 
                   <Route path="/inicio">

                        <div className='image'>
                            <img src={logo}></img>
                        </div>

                        <div className='info'>
                             <h6>Bienvenidos!</h6>
                        </div>

                   </Route>

                   <Route path="historia">
                       <h2>historia</h2>
                   </Route>


                   <Route path="/ubicacion">
                       <h1>ubicacion hghghghg</h1>
                   </Route>


                   <Route path="/actividades">
                         <h2>actividades</h2>
                   </Route>



            </Switch>
            
        </div>
    )
}

export default Main
