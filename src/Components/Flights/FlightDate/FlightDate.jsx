import React from 'react'

const FlightDate = () => {
  return (
    <div className='reservation__leave'>
            <span>Vuelo de salida</span>
            <div className='reservation__content'>
            <div>
              <h2>MEX</h2>
              <span className='reservation__time'>05:45PM</span>
            </div>
            <span className='reservation__underline'></span>
            <div>
              <h2>CUL</h2>
              <span className='reservation__time'>09:47PM</span>
            </div>
            </div>
            <span className='reservation__date'>Martes, 30 noviembre, 2021</span>
          </div>
  )
}

export default FlightDate