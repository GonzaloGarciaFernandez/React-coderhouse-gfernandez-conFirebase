import React, {useState} from 'react';
import { CartContext } from '../context/CartContext';

export const CartProvider = ({ children, defaultValue=[] }) => {

    const [cart, setCart] = useState(defaultValue);

    const [ cartTotal, setCartTotal] = useState(0);

    const addItem = (objeto) => {
        if(isInCart(objeto.item.data)){
            cart.map(x => increaseQuantity(x, objeto));
            var amountToIncreaseInMatch = objeto.cantCompra * objeto.item.data.price;
            setCartTotal(cartTotal + amountToIncreaseInMatch);
            return;
        }
        var amountToIncrease = objeto.item.data.price * objeto.cantCompra;
        console.log("OBJETO AL CARRITO", objeto);
        setCart([...cart, objeto]);
        setCartTotal(cartTotal + amountToIncrease);
    };

    const increaseQuantity = ( x, objeto )=>{
        if( x.item.data === objeto.item.data ){
            x.amount = x.amount + objeto.amount;
        }
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
            value = {{cart,addItem, clear,removeItem,isInCart, cartTotal}}
        >
            { children }
        </CartContext.Provider>
    );

}
