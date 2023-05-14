import React from 'react'
import './FlightReservation.scss'

const FlightReservation = () => {
  return (
    <div className='reservation'>
        <div className='reservation__passengers'>
            <span>Pasajeros</span>
            <span>1 Adulto</span>
        </div>
        <div className='reservation_flightsite'>
            <span>Vuelo de salida</span>
            <h2>MEX __ CUL</h2>
        </div>
    </div>
  )
}

export default FlightReservation