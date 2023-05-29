import React from 'react'
import './FlightNavbar.scss';
import ButtonData from '../../ButtonData/ButtonData';
import { useNavigate } from "react-router-dom";

const FlightNavBar = ({flight, flightDate, flightLocation}) => {
  const navigate = useNavigate();
  const goPage = () => {
        navigate("/");
  };
  return (
      <nav className='navBar'>
        <section className='navBar__section'>
        <div className='navBar__title'>
            <h1>{flight}</h1>
            <ButtonData label="Cambiar vuelo"
          customStyle={false}
          goPage={goPage}
          isVisible={true}/>
        </div>
        <div className='navBar__dates'>
            <h4 className='navBar__date'>{flightDate}</h4>
            <span className='navbar__location'>{flightLocation}</span>
        </div>
    </section>
    </nav>
  )
}

export default FlightNavBar