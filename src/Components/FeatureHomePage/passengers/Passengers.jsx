import React from "react";
import Minus from "../../../assets/icons/minus.svg";
import Plus from "../../../assets/icons/plus.svg";
import "./passengers.scss";

const typePassengers = [
  {
    title: "Adultos",
    age: "(13 + años)",
    type: "adult",
  },
  {
    title: "Niños",
    age: "(2 - 12 años)",
    type: "child",
  },
  {
    title: "Bebes",
    age: "(0 - 23 meses)",
    type: "baby",
  },
];

const Passengers = ({ setFormValues, formValue }) => {
  const onCounterSum = (Type, valueCounter) => {
    setFormValues({
      ...formValue,
      passengers: {
        ...formValue.passengers,
        [Type]: valueCounter + 1,
      },
    });
  };
  const onCounterLess = (Type, valueCounter) => {
    setFormValues({
      ...formValue,
      passengers: {
        ...formValue.passengers,
        [Type]: valueCounter > 0 ? valueCounter - 1 : 0,
      },
    });
  };

  return (
    <>
      <div className="row buttons-passengers">
        {typePassengers.map((passenger, index) => (
          <>
            <div className="col-6 column" key={index}>
              <span>
                <b>{passenger.title}</b>
              </span>
              <p className="m-0">{passenger.age}</p>
            </div>
            <div className="col-6">
              <div className="hstack">
                <button
                  type="button"
                  className="btn btn-left"
                  onClick={() =>
                    onCounterLess(
                      passenger.type,
                      formValue.passengers[passenger.type]
                    )
                  }
                >
                  <img src={Minus} alt="less" />
                </button>
                <span className="number">
                  <b>{formValue.passengers[passenger.type]}</b>
                </span>
                <button
                  type="button"
                  className="btn btn-right"
                  onClick={() =>
                    onCounterSum(
                      passenger.type,
                      formValue.passengers[passenger.type]
                    )
                  }
                >
                  <img src={Plus} alt="sum" />
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Passengers;
