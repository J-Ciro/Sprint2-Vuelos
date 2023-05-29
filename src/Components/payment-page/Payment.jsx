import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './payment-page.scss'
import {contextFligths} from '../../Routes/AppRouter'

const baseFlightsURL= 'https://vuelos-backend-production.up.railway.app/flights' 
const basePassengersURL= 'https://vuelos-backend-production.up.railway.app/clients' 

const PaymentPage = () => {
    const {formValue,total,fligthValue,seatSelected, setDateDefaul, cantPassengers} = useContext(contextFligths)
    const navigate = useNavigate();
    const [formValues,setFormValues] = useState({})
    const [validated, setValidated] = useState(false);

    const onChangeValue=(e)=>{
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
        
    }
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            
        }
        setValidated(true);
        if(form.checkValidity() === true){
            event.preventDefault();
            event.stopPropagation();
            Swal.fire({
                icon: 'warning',
                text: 'Desea confirmar compra?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, confirmar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post(basePassengersURL, {
                        name: formValues.name,
                        document: formValues.identification,
                        flightsDestiny:fligthValue?.destiny?.id,
                        flightsOrigin:fligthValue.origen.id,
                    }).then(async (response) => {
                        const seatsUpdateOrigen = {Seats: [...fligthValue.origen.Seats,...seatSelected.seatOrigen]};
                        await axios.patch(`${baseFlightsURL}/${fligthValue.origen.id}`, seatsUpdateOrigen);
                        if(formValue.travelRounded === 'true'){
                            const seatsUpdateDestiny = {Seats :[...fligthValue.destiny.Seats,...seatSelected.seatDestiny]};
                            await axios.patch(`${baseFlightsURL}/${fligthValue.destiny.id}`, seatsUpdateDestiny);
                            confirmData();
                        } else{
                            confirmData();
                        }
                    })
                }
            });
        }
    };
    
    const confirmData=()=>{
        Swal.fire({
            icon: 'success',
            title: 'Compra exitosa!!!',
            html:  `<p>Tu datos generados son:</p>
                    <p><b>origen</b>: ${formValue.origen}</p>
                    <p><b>destino</b>: ${formValue.destiny?formValue.destiny:'--'}</p>
                    <p><b>N° pasajeros</b>: ${cantPassengers}</p>
                    <p><b>Asientos</b>: ${seatSelected.seatOrigen.toString()},${seatSelected?.seatDestiny?.toString()}</p>
                    <p><b>Vuelo</b>: ${formValue.codeOrigen}${formValue?.codeDestiny}</p>
                    <p><b>Reserva</b>: ${formValues.identification}</p>
                    <p><b>Total</b>: ${total.toFixed(0)}</p>`
        }).then((result) => {
            if (result.isConfirmed) {
                setDateDefaul()
                navigate('/')
            }
        });
    }
    return(
        <section className="formPayment">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" name='name' required onChange={(e)=>onChangeValue(e) } />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCC">
                    <Form.Label>Cédula</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese su cédula" required name='identification'  onChange={(e)=>onChangeValue(e)} />
                </Form.Group>
                <Form.Label>Información de la tarjeta</Form.Label>

                <Form.Group  md="3" controlId="formTarget">
                    <Form.Control type="number" placeholder="1234 1234 1234 1234" min={1000000000000000} required  name='target'  onChange={(e)=>onChangeValue(e)} />
                </Form.Group>

                
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formDate">
                        <Form.Control type="text" placeholder="MM / YY" required name='dateTarget'  onChange={(e)=>onChangeValue(e)} />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="formCVC">
                        <Form.Control type="number" min={100} max={999} placeholder="CVC" required  name='cvc'  onChange={(e)=>onChangeValue(e)} />
                    </Form.Group>
                </Row>
                

                <Form.Group className="mb-3" controlId="formNameCard">
                    <Form.Label>Nombre en la tarjeta</Form.Label>
                    <Form.Control type="text"  required name='nameTarget'  onChange={(e)=>onChangeValue(e)} />
                </Form.Group>

                <Button className="searchSeat mt-3" type="submit">
                    Pagar
                </Button>
            </Form>
        </section>
    )
}

export default PaymentPage; 