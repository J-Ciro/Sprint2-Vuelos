import React from 'react'
import FlightNavBar from '../Flights/FlightNavbar/FlightNavBar'
import FlightPrice from '../Flights/FlightPrice/FlightPrice'
import ButtonData from '../ButtonData/ButtonData'
import Seats from './Seats/Seats'
import './FlightSeats.scss'

const FlightSeats = () => {
  return (
    <div className='main'>
    <section className='main__content'>
       <FlightNavBar/>
          <h5 className='main__title'>Selecciona tus asientos</h5>
       <div className='main__seats'>
          <div className='main__seatsContent'>

            <div className='main__seatsLetter'>
             <span className='main__a'>A</span>
             <span className='main__b'>B</span>
             <span className='main__c'>C</span>
            </div>
            <div className='main__seatsList'>
               <Seats/>

            </div>
         </div>
         <div className='main__fastExit'>
            <div className='main__exitTitle'>
               <span>Salida Rapida</span>
            </div>
            <div className='main__seatsNumbers'>
            <span className='main__numbers'>1</span>
             <span className='main__numbers'>2</span>
             <span className='main__numbers'>3</span>
             <span className='main__numbers'>4</span>
             <span className='main__numbers'>5</span>
            </div>
         </div>   
         <div className='main__seatsContent'>

<div className='main__seatsLetter'>
 <span className='main__a'>D</span>
 <span className='main__b'>E</span>
 <span className='main__c'>F</span>
</div>
<div className='main__seatsList'>
   <Seats/>

</div>
</div>      
       </div>
    </section>
    <aside className='main__aside'>
       <div>
          <h4>Tu reservacion</h4>
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

export default FlightSeats