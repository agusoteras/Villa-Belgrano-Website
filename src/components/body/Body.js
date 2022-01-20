import React from 'react'
import "./body.css"
import folk from "../../assets/folklore.jpg"
import gim from "../../assets/gim.jpg"
import feria from "../../assets/feria.webp"
import pintura from "../../assets/pintura.jpg"






const Body = () => {
    return (
        <div id='body' className='body'>

            
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={folk} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Clases de Folklore</h5>
        <p>¡Vení a disfrutar del baile en la plaza Manuel Belgrano!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={pintura} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Taller de pintura</h5>
        <p>Animate a mostrar tu arte tomando clases en la sede del centro vecinal</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={feria} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Feria artesanal</h5>
        <p>Te invitamos a disfrutar de nuestra feria los segundos Sábados <br></br> de cada mes en la plaza Manuel Belgrano</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<h5>Podes inscribirte a cualquiera de estas actividades en la <a target="_blank" href='https://www.google.com/maps/place/Plaza+Gutenberg/@-31.3623167,-64.2544351,16z/data=!4m19!1m13!4m12!1m4!2m2!1d-64.2512974!2d-31.3615719!4e1!1m6!1m2!1s0x94329ec81c3abcff:0xbdb9e032b76198d0!2splaza+gutenberg!2m2!1d-64.2531974!2d-31.3635521!3m4!1s0x94329ec81c3abcff:0xbdb9e032b76198d0!8m2!3d-31.3635521!4d-64.2531974'>sede</a> <br></br> del centro vecinal ubicada en la plaza Manuel Belgrano, ¡te esperamos!</h5>


        </div>
    )
}

export default Body
