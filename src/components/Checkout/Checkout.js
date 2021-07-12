import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from '../../firebase/firebase';

export const Checkout = () => {

    const {cart, cartTotal} = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [mensaje,setMensaje] = useState("");

    const handleInputChange = (event) => {
        setBuyer({
            ...buyer,
            [event.target.name] : event.target.value
        });
    };

    const onClickHandler = () => {
        const db = getFirestore();
        const orders = db.collection("ordenes");
        const newOrder = {
            buyer: buyer,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            items: cart,
            total: cartTotal
        };

        orders.add(newOrder).then(({id}) => {
            setMensaje(`Gracias por su Compra, el id es: ${id}`);
        }).catch(err => {
            setMensaje(`Ha ocurrido un error, su orden no se ha generado`);
        });
    };

    return (
        <div className="container">
            <h1 className="text-center fw-bolder">Checkout</h1>
            <div className="row">
                <div className="col-md-4 offset-md-4 mt-5">
                    <form onSubmit={e=> e.preventDefault()}>
                        <div class="mb-3">
                            <label className="form-label fw-bold">Nombre:</label>
                            <input type="text" className="form-control" aria-describedby="nameHelp" id="name" name="name" onChange={handleInputChange}></input>
                        </div>
                        <div class="mb-3">
                            <label className="form-label fw-bold">Email:</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" id="name" name="email" onChange={handleInputChange}></input>
                        </div>
                        <div class="mb-3">
                            <label className="form-label fw-bold">Teléfono:</label>
                            <input type="text" className="form-control" id="phone" name="phone" onChange={handleInputChange}></input>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-light border border-dark" onClick={() => onClickHandler()}>Enviar</button>
                        </div>
                    </form>

                    <p className="text-center mt-5 text-warning bg-dark">{mensaje}</p>
                </div>
            </div>
        </div>
    )
};
