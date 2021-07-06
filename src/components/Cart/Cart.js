import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartDetailList } from '../CartDetailList/CartDetailList';
import { NavLink } from 'react-router-dom';

export const Cart = () => {

    const {cart, clear} = useContext(CartContext);

    const listaCart = cart.length?cart.map((data) => {
    return(
        <CartDetailList data={data}/>
    )
    }): 
        <tr>
            <td colSpan={8}>Sin objetos en el carrito...</td>
            <NavLink exact to={"/"}>
                <button className="btn btn-dark">Volver al inicio</button>
            </NavLink>
        </tr>;

    return (
        <div className="container">
            <h1 className="text-center mt-2">Terminar mi compra</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Título</th>
                        <th className="text-center">Descripcion</th>
                        <th className="text-center">Imagen</th>
                        <th className="text-center">Precio por unidad</th>
                        <th className="text-center">Cantidad Seleccionada</th>
                        <th className="text-center">Total por Objeto</th>
                        <th className="text-center">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {listaCart}
                </tbody>
            </table>
            {
                cart.length !== 0 &&
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="d-flex justify-content-around mt-3">
                            <NavLink className="btn btn-primary" exact to={"/"}>Seguir Comprando</NavLink>
                            <button className="btn btn-danger" onClick={() => clear()}>Vaciar carrito</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
