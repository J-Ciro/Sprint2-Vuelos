import React from 'react'
import Seats from '../Seats/Seats'


const SelectSeats = () => {
  return (
    <>
  
    <div className="main__seats">
      <div className="main__seatsContent">
        <div className="main__seatsLetter">
          <span className="main__a">A</span>
          <span className="main__b">B</span>
          <span className="main__c">C</span>
        </div>
        <div className="main__seatsList">
          <Seats />
        </div>
      </div>
      <div className="main__fastExit">
        <div className="main__exitTitle">
          <span>Salida Rapida</span>
        </div>
        <div className="main__seatsNumbers">
          <span className="main__numbers">1</span>
          <span className="main__numbers">2</span>
          <span className="main__numbers">3</span>
          <span className="main__numbers">4</span>
          <span className="main__numbers">5</span>
        </div>
      </div>
      <div className="main__seatsContent">
        <div className="main__seatsLetter">
          <span className="main__a">D</span>
          <span className="main__b">E</span>
          <span className="main__c">F</span>
        </div>
        <div className="main__seatsList">
          <Seats />
        </div>
      </div>
    </div>
    <div className="main__standarSeats">
      <div className="main__seatsStandar">
        <Seats />
      </div>
      <div className="main__standarTitle">
        <span>Estandar</span>
        <div className="main__seatsNumbers">
          <span className="main__numbers">1</span>
          <span className="main__numbers">2</span>
          <span className="main__numbers">3</span>
          <span className="main__numbers">4</span>
          <span className="main__numbers">5</span>
        </div>
      </div>
      <div className="main__seatsStandar">
        <Seats />
      </div>
    </div>
   
    </>
  )
}

export default SelectSeats