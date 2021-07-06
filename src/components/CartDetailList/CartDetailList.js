import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartDetailList = ({data}) => {

    //Desestructuro item y cantidad del carrito:
    const {item, cantCompra} = data;

    const {removeItem} = useContext(CartContext);

    let precioTotalPorObjeto = item.data.price * cantCompra;

    return (
        <>
            <tr key={item.data.id}>
                <td className="align-middle text-center fw-bold">{item.data.id}</td>
                <td className="align-middle text-center fw-bold">{item.data.title}</td>
                <td className="align-middle text-center fw-bold">{item.data.description}</td>
                <td className="align-middle text-center"><img src={item.data.pictureUrl} style={{width:'200px'}} className="border border-dark rounded"/></td>
                <td className="align-middle text-center fw-bold"> $ {item.data.price}</td>
                <td className="align-middle text-center fw-bold">{cantCompra}</td>
                <td className="align-middle text-center fw-bold">$ {precioTotalPorObjeto}</td>
                <td className="align-middle text-center fw-bold">
                    <button type="button" className="btn btn-primary" onClick={()=>{removeItem(item.data.id)}}>Eliminar</button>
                </td>
            </tr>
        </>    
    )
}
