import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const { cart } = useContext(CartContext);

    return (
        <div className="d-flex">
            <i className="fas fa-shopping-cart me-2"></i>
            <p>{ cart.length !== 0 && cart.length}</p>
        </div>
    )
}
