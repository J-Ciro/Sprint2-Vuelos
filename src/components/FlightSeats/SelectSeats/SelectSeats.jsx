import React from "react";
import Seats from "../Seats/Seats";
import "./SelectSeats.scss";

const SelectSeats = ({activar, showOneTest}) => {
  return (
    <>
      <div className="mainn__seats">
        <div className="mainn__seatsContent">
          <div className="mainn__seatsLetter">
            <span className="mainn__a">A</span>
            <span className="mainn__b">B</span>
            <span className="mainn__c">C</span>
          </div>
          <div className="mainn__seatsList">
            <Seats maxColumns={3} specialColumns={0} showSeatsRange="A-C" prueba={"salida"} />
          </div>
        </div>
        <div className="mainn__fastExit">
          <div className="mainn__exitTitle">
            <span>Salida Rapida</span>
          </div>
          <div className="mainn__seatsNumbers">
            <span className="mainn__numbers">1</span>
            <span className="mainn__numbers">2</span>
            <span className="mainn__numbers">3</span>
            <span className="mainn__numbers">4</span>
            <span className="mainn__numbers">5</span>
          </div>
        </div>
        <div className="mainn__seatsContent">
          <div className="mainn__seatsLetter">
            <span className="mainn__a">D</span>
            <span className="mainn__b">E</span>
            <span className="mainn__c">F</span>
          </div>
          <div className="mainn__seatsList">
            <Seats maxColumns={3} specialColumns={3} showSeatsRange="D-F" prueba={"regreso"}  />
          </div>
        </div>
      </div>
      <div className="mainn__standarSeats">
        <div className="mainn__seatsStandar">
          <Seats maxColumns={3} specialColumns={0} showSeatsRange="A-C" prueba={"salida"}/>
        </div>
        <div className="mainn__standarTitle">
          <span className="mainn__exitTitle">Salida Estandar</span>
          <div className="mainn__seatsNumbers">
            <span className="mainn__numbers">1</span>
            <span className="mainn__numbers">2</span>
            <span className="mainn__numbers">3</span>
            <span className="mainn__numbers">4</span>
            <span className="mainn__numbers">5</span>
          </div>
        </div>
        <div className="mainn__seatsStandar">
          <Seats maxColumns={3} specialColumns={3} showSeatsRange="D-F" prueba={"regreso"}/>
        </div>
      </div>
    </>
  );
};

export default SelectSeats;
