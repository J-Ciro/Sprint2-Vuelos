import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Seats.scss';


const ASIENTOS = 'https://vuelos-backend-production.up.railway.app/seats';
const COMPRAS = 'https://vuelos-backend-production.up.railway.app/flights';

const Seats = ({ maxColumns, showSeatsRange, prueba }) => {
  const [seatsData, setSeatsData] = useState(null);
  const [pucharseData, setPucharsesData] = useState(null);
  const [dataArrived, setDataArrived] = useState({});
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [passengers, setPassengers] = useState();



  useEffect(() => {
    const getSessionData = (key, defaultValue) => {
      const stored = sessionStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    };

    const getSeatsData = (key, defaultValue) => {
      const stored = sessionStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    };
    const userSeatsData = getSessionData("userSeats", {});
    getSessionData(userSeatsData);
    sessionStorage.setItem("userSeats", JSON.stringify(selectedSeat));

    const fetchData = async () => {
      try {
        const [asientosResponse, comprasResponse] = await Promise.all([
          axios.get(ASIENTOS),
          axios.get(COMPRAS),
        ]);

        const asientosData = asientosResponse.data;
        const comprasData = comprasResponse.data;

        setSeatsData(asientosData);
        setPucharsesData(comprasData);
        sessionStorage.setItem('seats', JSON.stringify(asientosData));
      } catch (error) {
        console.log(error);
      }
    };

    const storageData = getSessionData("user", true);
    setDataArrived({ ...storageData });
    

    fetchData();
  
  }, [selectedSeat]);

  const FlightSeats = () => {
    
    if (!seatsData || !seatsData.fastExit) {
      return null;
    }

    const { row, columns } = seatsData.fastExit;

    const asientos = [];
    const specialAsientos = [];
    const asientosSalida = pucharseData?.filter(item => item.destiny === dataArrived.destiny && item.origin === dataArrived.origen);
    const asientosRegreso = pucharseData?.filter(item =>  item.origen == asientosSalida.origin);

    const passengersData = Object.values(dataArrived.passengers)
    const sum = passengersData.reduce((total, value) => total + value, 0)
    setPassengers(sum)
   
    // console.log(pucharseData, "ALL DATA")

    const showOneTest = () => {
      
    }
    if (prueba === "salida") {
    // Muestreo de A hasta C
    if (showSeatsRange === 'A-C') {
      for (let j = 0; j < row; j++) {
        
        const arrayFilas = [];

        for (let i = 0; i < maxColumns; i++) {
          const codeSeat = `${String.fromCharCode(65 + i)}${j + 1}`;
          const regresoVuelo = asientosSalida?.some(item => item.seats?.some(seat => seat.seat === codeSeat && seat.standar === "false"));
          const salidaVuelo = asientosSalida?.some(item => item.salidaVuelo?.some(seat => seat.seats.some(s => s.seat === codeSeat)));
          const estaSeleccionado = selectedSeat?.some(item => item === codeSeat)
          let estaEnArray = false;
          console.log(selectedSeat)
          if (selectedSeat.includes(codeSeat)) {
            estaEnArray = true;
          }  
          arrayFilas.push(
            <span
              key={codeSeat}
              className={`main__seat ${salidaVuelo? 'active' :  estaSeleccionado? "selected" : ""}`}
              onClick={() => {
                // console.log(selectedSeat)
                if (selectedSeat.includes(codeSeat)) {
                  // If the seat is already selected, remove it from the array
                  setSelectedSeat(selectedSeat.filter((seat) => seat !== codeSeat));
                } else if (selectedSeat.length < sum) {
                  // If the seat is not selected and the maximum number of seats is not reached, add it to the array
                  console.log(selectedSeat)
                  setSelectedSeat([...selectedSeat, codeSeat]);
                }
              
              }}
            >
              {codeSeat}
            </span>
          );
        }

        asientos.push(arrayFilas);
      }
    }

    // Muestreo de D hasta F
    if (showSeatsRange === 'D-F') {
      for (let j = 0; j < row; j++) {
        const specialAsientos = [];

        for (let i = maxColumns; i < columns; i++) {
          const codeSeat = `${String.fromCharCode(65 + i)}${j + 1}`;
          const salidaVuelo = asientosSalida?.some(item => item.salidaVuelo?.some(seat => seat.seats === codeSeat));
          const regresoVuelo = asientosRegreso?.some(item => item.vueloRegreso?.some(seat => seat.seats.some(s => s.seat === codeSeat)));
          const estaSeleccionado = selectedSeat?.some(item => item === codeSeat)
          specialAsientos.push(
            <span
            key={codeSeat}
            className={`main__seat ${regresoVuelo? 'active' :  estaSeleccionado? "selected" : ""}`}
            onClick={() => {
              if (selectedSeat.includes(codeSeat)) {
                // If the seat is already selected, remove it from the array
                setSelectedSeat(selectedSeat.filter((seat) => seat !== codeSeat));
              } else if (selectedSeat.length < sum) {
                // If the seat is not selected and the maximum number of seats is not reached, add it to the array
                setSelectedSeat([...selectedSeat, codeSeat]);
              }
              console.log(selectedSeat);
              }}
            >
              {codeSeat}
            </span>
          );
        }
        asientos.push(specialAsientos);
      }
    }
  }else if(prueba === "regreso"){
    if (showSeatsRange === 'A-C') {
      for (let j = 0; j < row; j++) {
        const arrayFilas = [];

        for (let i = 0; i < maxColumns; i++) {
          const codeSeat = `${String.fromCharCode(65 + i)}${j + 1}`;
          // console.log(asientosSalida[0].seats[0], "SIENTOS OCUPADIOS 1");
          // console.log(codeSeat, "OCUPADOS 2")
          const regresoVuelo = asientosSalida?.some(item => item.vueloRegreso?.some(seat => seat.seats === codeSeat ));
          const salidaVuelo = asientosSalida?.some(item => item.salidaVuelo?.some(seat => seat.seats.some(s => s.seat === codeSeat)));
          
          // console.log(salidaVuelo, "STANDAR OCUPADO")
         
          const estaSeleccionado = selectedSeat?.some(item => item === codeSeat)
          console.log(estaSeleccionado)
          arrayFilas.push(
            <span
              key={codeSeat}
              className={`main__seat ${salidaVuelo? 'active' :  estaSeleccionado? "selected" : ""}`}
              onClick={() => {
                console.log(selectedSeat)
                if (selectedSeat.includes(codeSeat)) {
                  // If the seat is already selected, remove it from the array
                  setSelectedSeat(selectedSeat.filter((seat) => seat !== codeSeat));
                } else if (selectedSeat.length < sum) {
                  // If the seat is not selected and the maximum number of seats is not reached, add it to the array
                  setSelectedSeat([...selectedSeat, codeSeat]);
                }
              }}
            >
              {codeSeat}
            </span>
          );
        }

        asientos.push(arrayFilas);
      }
    }

    // Muestreo de D hasta F
    if (showSeatsRange === 'D-F') {
      for (let j = 0; j < row; j++) {
        

        for (let i = maxColumns; i < columns; i++) {
          const codeSeat = `${String.fromCharCode(65 + i)}${j + 1}`;
          const salidaVuelo = asientosSalida?.some(item => item.salidaVuelo?.some(seat => seat.seat === codeSeat));
          const regresoVuelo = asientosRegreso?.some(item => item.vueloRegreso?.some(seat => seat.seats.some(s => s.seat === codeSeat)));
          const estaSeleccionado = selectedSeat?.some(item => item === codeSeat)
          specialAsientos.push(
            <span key={codeSeat}  className={`main__seat ${regresoVuelo? 'active' :  estaSeleccionado? "selected" : ""}`}
            onClick={() => {
              if (selectedSeat.includes(codeSeat)) {
                // If the seat is already selected, remove it from the array
                setSelectedSeat(selectedSeat.filter((seat) => seat !== codeSeat));
              } else if (selectedSeat.length < sum) {
                // If the seat is not selected and the maximum number of seats is not reached, add it to the array
                setSelectedSeat([...selectedSeat, codeSeat]);
              }
             }}>
              {codeSeat}
            </span>
          );
        }
        asientos.push(specialAsientos);
      }
    }
    
  }

  if (selectedSeat.length === sum) {
    console.log(dataArrived)
    sessionStorage.setItem("userSeats", JSON.stringify(selectedSeat));
    
  }
    return (
      <>
        {showSeatsRange === 'A-C' && (
          <div className={`asientos-normales ` } >{asientos}</div>
        )}
        {showSeatsRange === 'D-F' && (
          <div className="asientos-especiales">{specialAsientos}</div>
        )}
      </>
    );
  };

  return <FlightSeats/>;
};

export default Seats;