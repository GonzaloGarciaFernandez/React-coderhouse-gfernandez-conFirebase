import React, {useState} from 'react';
import { CartContext } from '../context/CartContext';

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (objeto) =>{
        //VERIFICO OBJETO AL CARRITO>>>
        console.log("OBJETO AL CARRITO", objeto);
        
        setCart([...cart,objeto]);
        //falta logica para sumar cantidad y preciototal
    };

    const removeItem = (id) =>{
        let newCart = cart.filter(x => x.item.data.id !== id);
        setCart(newCart);
    };

    const clear = () =>{
        setCart([]);
    };

    const isInCart = (id)=>{
        cart.find(x => x.item.data.id === id);
        if(id){
            return true;
        }else{
            return false;
        }
    };

    return(
        <CartContext.Provider
            value = {{cart, addItem, clear,removeItem}}
        >
            { children }
        </CartContext.Provider>
    );

}
