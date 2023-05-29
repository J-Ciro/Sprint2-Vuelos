import React from 'react'
import './FlightPrice.scss'
const FlightPrice = ({prices = [], label = [], total, title}) => {
  return (
    <div className='invoices'>
      <h4 className='invoices__title'>{title}</h4>
    <div className='total'>
        
        <div className='total__label'>
            <ul>
            {label.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
                <li><span className='total__finalLabel'>Total</span></li>
            </ul>
        </div>
        <div className='total__cost'>
            <ul>
            {prices.map((price, index) => (
              <li key={index}>{price}</li>
            ))}
                <li><span className='total__finalPrice'>{total}</span></li>
            </ul>
        </div>
        
    </div>
    </div>
  )
}

export default FlightPrice