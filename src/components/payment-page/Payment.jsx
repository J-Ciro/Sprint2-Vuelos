import React, { useState, useContext, useEffect } from "react";
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

const PaymentPage = () => {
    const {seatSelected} = useContext(contextFligths)
    const navigate = useNavigate();
    const [formValues,setFormValues] = useState({})
    const [user, setUser] =useState({})
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        const getSessionData = (key, defaultValue) => {
            const stored = sessionStorage.getItem(key);
            return stored ? JSON.parse(stored) : defaultValue;
        };
        const storageData = getSessionData('user', true);
        const storageDataVueloSalida = getSessionData('salidaVuelo', true);
        const storageDataaVueloRegreso = getSessionData('vueloRegreso', true);
        console.log({...storageData,salida:{...storageDataVueloSalida},regreso:{...storageDataaVueloRegreso}})
        setUser({...storageData,salida:{...storageDataVueloSalida},regreso:{...storageDataaVueloRegreso}});
    }, []);

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
                    const asientosSalida=[]
                    const asientosRegreso=[]
                    seatSelected.seatOrigen.map((item,index)=>{
                        asientosSalida.push({
                            "id": index,
                            "seat": item
                        })
                    })
                    seatSelected.seatDestiny.map((item,index)=>{
                        asientosRegreso.push({
                            "id": index,
                            "seat": item
                        })
                    })
                    axios.post(baseFlightsURL, {
                        name: formValues.name,
                        document: formValues.identification,
                        destiny:user.destiny,
                        Origin:user.origen,
                        salidaVuelo: [
                            {
                              startHor: user.salida.startHour,
                              finalHour:  user.salida.finalHour,
                              seats: [...asientosSalida]
                            }
                        ],
                        vueloRegreso: [
                            {
                              startHor: user.regreso.startHour,
                              finalHour:user.regreso.finalHour,
                              seats: [...asientosRegreso]
                            }
                          ],
                          passengers: [
                            {
                              ...user.passengers
                            }
                          ],
                          "baggage-type": ""
                    }).then(async (response) => {
                        confirmData();
                    })
                }
            });
        }
    };
    
    const confirmData=()=>{
        const cantPassengers=Object.values(user.passengers).reduce((a, b) => a + b, 0); 
        const total = Number(user.origenPrice)+Number(user.destinyPrice)
        Swal.fire({
            icon: 'success',
            title: 'Compra exitosa!!!',
            html:  `<p>Tu datos generados son:</p>
                    <p><b>origen</b>: ${user.origen}</p>
                    <p><b>destino</b>: ${user.destiny?user.destiny:'--'}</p>
                    <p><b>N° pasajeros</b>: ${cantPassengers}</p>
                    <p><b>Asientos</b>: ${seatSelected.seatOrigen.toString()},${seatSelected?.seatDestiny?.toString()}</p>
                    <p><b>Vuelo</b>: ${user.codeOrigen} - ${user?.codeDestiny}</p>
                    <p><b>Reserva</b>: ${formValues.identification}</p>
                    <p><b>Total</b>: ${total.toFixed(0)}</p>`
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.clear()
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