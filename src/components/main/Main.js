import React from 'react'
import "./main.css"
import logo from "../../assets/logo.png"
import sede from "../../assets/sede1.png"
import parque from "../../assets/parque.jpg"
import video from "../../assets/backvideo.mp4"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


const Main = () => {

    return (
        <div className='main'>

            <Switch>
                 
                   <Route path="/historia">

                       <div className='history'>

                           <div className='history-container'>

                               <div className='history-text'>
                                      <h2>Acerca del barrio</h2>
                                      <p>Villa Belgrano es un barrio de la ciudad de Córdoba con mas de 100 años de historia, en Argentina. Se ubica en la zona noroeste y es uno de los barrios más grandes en cuanto a superficie.

Sus límites oficiales los marcan el río Suquía por el sur y el este; la avenida Recta Martinoli por el norte; y por el oeste calle Heriberto Martínez.

De manzanas largas, el barrio posee unas 87 manzanas. El barrio a la vez está dividido en otros "sub-barrios" que no están reconocidos oficialmente y catastralmente por el Municipio. Ellos reciben el nombre de Vilanova, Costa Belgrano, Parque Modelo y La Pequeña. Está situado cerca de importantes centros comerciales tales como Dinosaurio Mall, Córdoba Shopping y Villa Rivera Indarte.

Cercano al barrio, se encuentra el Aeropuerto Internacional Ingeniero Ambrosio Taravella a 11km (14 minutos aprox) y el Estadio Mario Alberto Kempes.</p>
                               </div>
                                
                           </div>
                            
                           <div className='img-history-container'>
                                 <img src={parque}></img>
                           </div>
                            

                       </div>
                       
                       
                   </Route>


                   <Route path="/atencion">

                       <div className='atencion-container'>

                            <div className='sede'>
                                 <img src={sede}></img>
                            </div>

                            <div className='atencion'>
                                <div className='atencion-text'>
                                    <h2>Atención</h2>
                                    <h5>Nuestra sede ubicada en la plaza Manuel Belgrano (Ex Gutenberg) se encuentra abierta al público los días Miercoles y Viernes de 18 a 19 Hs. para el pago de cuotas sociales, inscripcion a talleres, atención de sugerencias o inquietudes acerca del barrio en general. Támbien podés comunicarte de manera telefónica al número 3513032926 <br></br> !Los esperamos para participar haciendo de nuestro barrio un mejor lugar para vivir!</h5>
                                    <a target="_blank" href='https://www.google.com/maps/place/Plaza+Gutenberg/@-31.3623167,-64.2544351,16.75z/data=!4m19!1m13!4m12!1m4!2m2!1d-64.2512974!2d-31.3615719!4e1!1m6!1m2!1s0x94329ec81c3abcff:0xbdb9e032b76198d0!2splaza+gutenberg!2m2!1d-64.2531974!2d-31.3635521!3m4!1s0x94329ec81c3abcff:0xbdb9e032b76198d0!8m2!3d-31.3635521!4d-64.2531974'>¿Como Llegar?</a>
                                </div>
                               
                            </div>


                       </div>
                   
                      
                       
                   </Route>


                   <Route path="/">

                      

                       <div className='inicio'>

                            <video className="video" src ={video} autoPlay loop muted> </video>
                             
                             <section className='inicio-section'>
                                  <div className='image'>
                                       <img src={logo}></img>
                                  </div>

                                  <div className='informacion'>
                                      <h1>¡Juntos por un mejor lugar donde vivir!</h1>
                                  </div>
                             </section>
                             
                       </div>

                     
                       
                   </Route>

            </Switch>
            
        </div>
    )
}

export default Main
