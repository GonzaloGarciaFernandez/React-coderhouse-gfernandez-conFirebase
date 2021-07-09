import React, {useState} from 'react';
import { CartContext } from '../context/CartContext';

export const CartProvider = ({ children, defaultValue=[] }) => {

    const [cart, setCart] = useState(defaultValue);

    const [ cartTotal, setCartTotal] = useState(0);

    const addItem = (objeto) => {
        if(isInCart(objeto.item.data)){
            cart.map(x => aumentarCantidad(x, objeto));
            let cantidadParaAumentar = objeto.cantCompra * objeto.item.data.price;
            setCartTotal(cartTotal + cantidadParaAumentar);
            return;
        };
        var cantidadAIncrementar = objeto.item.data.price * objeto.cantCompra;
        setCart([...cart, objeto]);
        setCartTotal(cartTotal + cantidadAIncrementar);
    };

    const aumentarCantidad = ( x, objeto )=>{
        if( x.item.data === objeto.item.data ){
            x.amount = x.amount + objeto.amount;
        };
    };

    const descontarCantidad = (id) =>{
        let unitPrice = cart.filter(x => x.item.data.id === id);
        console.log(unitPrice)
        let amountToDiscount = unitPrice[0].item.data.price * unitPrice[0].cantCompra;
        setCartTotal(cartTotal - amountToDiscount);
    };

    const removeItem = (id) =>{
        descontarCantidad(id);
        let newCart = cart.filter(x => x.item.data.id !== id);
        setCart(newCart);
    };

    const clear = () =>{
        setCart(defaultValue);
        setCartTotal(0);
    };

    const getFromCart = (id) => {
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
