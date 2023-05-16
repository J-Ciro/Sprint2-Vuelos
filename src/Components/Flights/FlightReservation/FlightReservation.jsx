import React from 'react'
import './FlightReservation.scss'
import FlightDate from '../FlightDate/FlightDate'

const FlightReservation = () => {
  return (
    <div className='reservation'>
        <div className='reservation__passengers'>
            <span>Pasajeros</span>
            <ul>
              <li><h5>1 Adulto</h5></li>
              <li><h5>2 Adulto</h5></li>
              <li><h5>1 Adulto</h5></li>
            </ul>
            
        </div>
        <section className='reservation__flightsite'>
        <FlightDate/>
        <FlightDate/>
        </section>
    </div>
  )
}

export default FlightReservation