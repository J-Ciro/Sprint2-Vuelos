import React from 'react'
import FlightNavBar from './FlightNavbar/FlightNavBar'
import './Flights.scss'
import FlightReservation from './FlightReservation/FlightReservation'
import FlightTimeBags from './FlightTimeBags/FlightTimeBags'


const Flights = () => {
  return (
    <div className='main'>
        <section className='main__content'>
          <FlightNavBar/>
          <FlightTimeBags/>
          <FlightTimeBags/>

        </section>
        <aside className='main__aside'>
            <h4>Tu reservacion</h4>
            <FlightReservation/>
        </aside>
    </div>
  )
}

export default Flights