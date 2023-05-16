import React from 'react'
import './FlightPrice.scss'
const FlightPrice = () => {
  return (
    <div className='total'>
        <div className='total__label'>
            <ul>
                <li>Tarifa Base</li>
                <li>Descuento Promocional</li>
                <li>Tarifa base con descuento</li>
                <li>IVA Tarifa</li>
                <li><span className='total__finalLabel'>Total</span></li>
            </ul>
        </div>
        <div className='total__cost'>
            <ul>
                <li>$1,505MX</li>
                <li>$1,505MX</li>
                <li>$1,505MX</li>
                <li>$1,505MX</li>
                <li><span className='total__finalPrice'>$1,505MX</span></li>
            </ul>
        </div>
        
    </div>
  )
}

export default FlightPrice