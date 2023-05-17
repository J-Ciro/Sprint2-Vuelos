import React from 'react'
import FlightNavBar from './FlightNavbar/FlightNavBar'
import './Flights.scss'
import FlightReservation from './FlightReservation/FlightReservation'
import FlightTimeBags from './FlightTimeBags/FlightTimeBags'
import FlightPrice from './FlightPrice/FlightPrice'
import ButtonData from '../ButtonData/ButtonData'
import '../ButtonData/ButtonData.scss'


const Flights = () => {
  return (
    <div className='main'>
        <section className='main__content'>
          <FlightNavBar/>
          <FlightTimeBags/>
          <FlightTimeBags/>
          <FlightNavBar/>
          <FlightTimeBags/>
          <FlightTimeBags/>
        </section>
        <aside className='main__aside'>
          <div>
            <h4>Tu reservacion</h4>
            <FlightReservation/>
          </div>
          <div>
              <h4>Costo de vuelo</h4>
            <FlightPrice/>
          </div>
          <ButtonData label="Seleccionar Asiento" customStyle={true}/>
        </aside>
    </div>
  )
}

export default Flights