import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './FlightTimeBags.scss'

const FlightTimeBags = () => {
  return (
    <div className='card'>
        <section className='card__time'>
            <h3>05:50 PM</h3>
            <div className='card__timescale'>
                <span>1h 57min</span>
                <span>*---*</span>
                <span>Sin escala</span>
            </div>
            <h3>06:47 PM</h3>
        </section>
        <section className='card__bags'>
            <div className='card__bag'>
                <figure>
                <FontAwesomeIcon icon={faSuitcase} />
                </figure>
                <span>1 objeto personal</span>
                <span>$548 MXN</span>
            </div>
            <div className='card__bag'>
                <figure>
                <FontAwesomeIcon icon={faSuitcase} />
                </figure>
                <span>Equipaje de Mano</span>
                <span>$1,084 MXN</span>
            </div>
            <div className='card__bag'>
                <figure>
                <FontAwesomeIcon icon={faSuitcase} />
                </figure>
                <span>Equipaje 25kg</span>
                <span>$1,045 MXN</span>
            </div>
        </section>
    </div>
  )
}

export default FlightTimeBags