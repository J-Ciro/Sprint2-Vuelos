import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FlightNavBar from "./FlightNavbar/FlightNavBar";
import "./Flights.scss";
import FlightReservation from "./FlightReservation/FlightReservation";
import FlightTimeBags from "./FlightTimeBags/FlightTimeBags";
import FlightPrice from "./FlightPrice/FlightPrice";
import ButtonData from "../ButtonData/ButtonData";
import { DateTime } from "luxon";
import { contextFligths } from "../../Routes/AppRouter";

const getSessionData = (key, defaultValue) => {
  const stored = sessionStorage.getItem(key);
  return stored ? JSON.parse(stored) : defaultValue;
};

const Flights = () => {
  const [dataArrived, setDataArrived] = useState({});
  const { formValue } = useContext(contextFligths);
  const [departureTime, setDepartureTime] = useState("");
  const [finalTime, setFinalTime] = useState("");
  const [timeBetween, setTimeBetween] = useState(0);
  const [salidaVueloData, setSalidaVueloData] = useState({});
  const [vueloRegresoData, setVueloRegresoData] = useState({});
  const [btnState, setBtnState] = useState();

  const [isDepartureSelected, setIsDepartureSelected] = useState(false);
  const [isReturnSelected, setIsReturnSelected] = useState(false);

  useEffect(() => {
    const storageData = getSessionData("user", true);
    setDataArrived({ ...storageData });

    const generateRandomTime = () => Math.floor(Math.random() * 19) + 2;
    const generateRandomMinute = () => Math.floor(Math.random() * 60);

    let randomTime = generateRandomTime();
    let randomFinalTime = generateRandomTime();

    if (randomTime === randomFinalTime) {
      randomFinalTime = randomTime === 2 ? randomTime + 1 : randomTime - 1;
    }

    const formatTime = (time) => {
      const hour = time > 12 ? time - 12 : time;
      const amPm = time >= 12 ? "PM" : "AM";
      return `${hour.toString().padStart(2, "0")}:${generateRandomMinute().toString().padStart(2, "0")} ${amPm}`;
    };

    let smallerTime = Math.min(randomTime, randomFinalTime);
    let largerTime = Math.max(randomTime, randomFinalTime);

    const newDepartureTime = formatTime(smallerTime);
    const newFinalTime = formatTime(largerTime);
    const newTimeBetween = largerTime - smallerTime;

    setDepartureTime(newDepartureTime);
    setFinalTime(newFinalTime);
    setTimeBetween(newTimeBetween);
  }, []);

  const handleDepartureTimeClick = (selectedDepartureTime, selectedFinalTime) => {
    if (isDepartureSelected && selectedDepartureTime === departureTime) {
      setDepartureTime("");
      setFinalTime("");
      setIsDepartureSelected(false);
      sessionStorage.removeItem("salidaVuelo");
      return;
    }

    setDepartureTime(selectedDepartureTime);
    setFinalTime(selectedFinalTime);
    setIsDepartureSelected(true);

    const sessionStorageData = getSessionData("salidaVuelo", {});
    sessionStorageData.startHour = selectedDepartureTime;
    sessionStorageData.finalHour = selectedFinalTime;
    sessionStorage.setItem("salidaVuelo", JSON.stringify(sessionStorageData));
  };

  const handleReturnTimeClick = (selectedDepartureTime, selectedFinalTime) => {
    if (isReturnSelected && selectedFinalTime === finalTime) {
      setDepartureTime("");
      setFinalTime("");
      setIsReturnSelected(false);
      sessionStorage.removeItem("vueloRegreso");
      return;
    }

    setDepartureTime(selectedDepartureTime);
    setFinalTime(selectedFinalTime);
    setIsReturnSelected(true);

    const sessionStorageData2 = getSessionData("vueloRegreso", {});
    sessionStorageData2.startHour = selectedDepartureTime;
    sessionStorageData2.finalHour = selectedFinalTime;
    sessionStorage.setItem("vueloRegreso", JSON.stringify(sessionStorageData2));
  };

  useEffect(() => {
    const salidaVueloSessionData = getSessionData("salidaVuelo", {});
    const vueloRegresoSessionData = getSessionData("vueloRegreso", {});
    setSalidaVueloData(salidaVueloSessionData);
    setVueloRegresoData(vueloRegresoSessionData);
  }, []);

  const navigate = useNavigate();
  const goPage = () => {
    navigate("seats");
  };

  useEffect(() => {
    if (!isDepartureSelected || !isReturnSelected) {
      setBtnState(false);
    } else {
      setBtnState(true);
    }
    console.log(isDepartureSelected, isReturnSelected)
  }, [isDepartureSelected, isReturnSelected]);

  const total = parseInt(dataArrived.origenPrice) + parseInt(dataArrived.destinyPrice);
  const ivaTotal = parseInt(total) + 25;

  return (
    <div className="mainn">
      <section className="mainn__content">
        <div>
          <FlightNavBar
            flightDate={DateTime.fromISO(dataArrived.dateLeave).toLocaleString({
              weekday: "long",
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
            flightLocation={`${dataArrived.origen} (${dataArrived.codeOrigen}) a ${dataArrived.destiny}  (${dataArrived.codeDestiny})`}
            flight={"Vuelo de Salida"}
          />
          <FlightTimeBags
            onSelect={handleDepartureTimeClick}
            departureTime={salidaVueloData.startHour}
            finalTime={salidaVueloData.finalHour}
            timeBetween={timeBetween}
            isSelected={isDepartureSelected}
            vueloSalida={true}
          />
        </div>

        <div>
          <FlightNavBar
            flightDate={DateTime.fromISO(dataArrived.dateArrive).toLocaleString({
              weekday: "long",
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
            flightLocation={`${dataArrived.destiny} (${dataArrived.codeDestiny}) a ${dataArrived.origen} (${dataArrived.codeOrigen})`}
            flight={"Vuelo de Regreso"}
          />
          <FlightTimeBags
            onSelect={handleReturnTimeClick}
            departureTime={vueloRegresoData.startHour}
            finalTime={vueloRegresoData.finalHour}
            timeBetween={timeBetween}
            vueloSalida={false}
            isSelected={isReturnSelected}
          />
        </div>
      </section>
      <aside className="mainn__aside">
        <div>
          <FlightReservation title={"Tu Reserva"} passengers={dataArrived.passengers} />
        </div>
        <div>
          <FlightPrice
            prices={[`$${total}  USD`, "$20 USD"]}
            label={["Tarifa Base", "IVA Tarifa"]}
            total={`$${ivaTotal} USD`}
            title={"Costo de Vuelo"}
          />
        </div>
        <ButtonData label="Seleccionar Asiento" customStyle={true} goPage={goPage} isVisible={btnState} />
      </aside>
    </div>
  );
};

export default Flights;
