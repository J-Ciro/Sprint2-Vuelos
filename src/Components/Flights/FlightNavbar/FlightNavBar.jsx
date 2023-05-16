import React from 'react'
import './FlightNavbar.scss';
import ButtonData from '../../ButtonData/ButtonData';

const FlightNavBar = () => {
  return (
      <nav className='navBar'>
        <section className='navBar__section'>
        <div className='navBar__title'>
            <h1>Vuelo de salida</h1>
            <ButtonData label="Cambiar vuelo" />
        </div>
        <div className='navBar__dates'>
            <h4 className='navBar__date'>Martes 30 nov 2021</h4>
            <span className='navbar__location'>Cd. Mex (AICM) a Culiacan</span>
        </div>
    </section>
    </nav>
  )
}

export default FlightNavBar