import React, { useState, useContext } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


export const ItemDetail = ({item}) => {

    const [cantCompra, setCantCompra] = useState(0);

    const {addItem} = useContext(CartContext);

    const onAdd = ( cantidad ) => {
        setCantCompra( cantidad );
    };

    return (
        <div className="d-flex justify-content-center my-5">
            <div className="card animate__bounceIn" style={{width: '30rem',padding:'10px'}}>
                <img src={item.data.pictureUrl} alt={item.data.description} className="card-img-top border border-dark rounded "/>
                <div className="card-body">
                    <h5 className="card-title">{item.data.title}</h5>
                    <p className="card-text">{item.data.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${item.data.price}</li>
                    <li className="list-group-item">Espesor: {item.data.width}</li>
                    <li className="list-group-item">Composición: {item.data.composition}</li>
                    <li className="list-group-item">Forma: {item.data.shape}</li>
                </ul>
                {cantCompra === 0 &&
                    <ItemCount 
                        initial={1}
                        stock={item.data.amount}
                        onAdd={onAdd}
                    />
                }
                {cantCompra !== 0 &&
                    <div className="container">    
                        <div className="row">
                            <NavLink className="btn btn-outline-primary mb-2" exact to={'/'} onClick={()=>addItem({item, cantCompra})}>Agregar al Carrito y Seguir Comprando</NavLink>
                        </div>
                        <div className="row">
                            <NavLink className="btn btn-outline-success mb-2" exact to={'/cart'} onClick={()=>addItem({item, cantCompra})}>Agregar al Carrito y Terminar mi compra</NavLink>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

