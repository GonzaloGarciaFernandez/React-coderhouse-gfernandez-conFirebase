import React, {useState} from 'react';
import { CartContext } from '../context/CartContext';

export const CartProvider = ({ children, defaultValue=[] }) => {

    const [cart, setCart] = useState(defaultValue);
    
    const addItem = (objeto) =>{
        //VERIFICO OBJETO AL CARRITO>>>
        console.log("OBJETO AL CARRITO", objeto);
        setCart([...cart,objeto]);
    };

    const removeItem = (id) =>{
        let newCart = cart.filter(x => x.item.data.id !== id);
        setCart(newCart);
    };

    const clear = () =>{
        setCart(defaultValue);
    };

    function getFromCart(id) {
        return cart.find(x => x.id === id);
    };

    const isInCart = (id)=>{
        return id === undefined ? undefined : getFromCart(id) !== undefined;
    };

    return(
        <CartContext.Provider
            value = {{cart,addItem, clear,removeItem,isInCart}}
        >
            { children }
        </CartContext.Provider>
    );

}
