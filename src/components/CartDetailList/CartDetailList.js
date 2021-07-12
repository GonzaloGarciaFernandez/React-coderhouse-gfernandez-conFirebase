import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartDetailList = ({data}) => {

    const {item, cantCompra} = data;

    const {removeItem} = useContext(CartContext);

    let precioTotalPorObjeto = item.price * cantCompra;

    return (
        <>
            <tr key={item.id}>
                <td className="align-middle text-center fw-bold">{item.title}</td>
                <td className="align-middle text-center fw-bold">{item.description}</td>
                <td className="align-middle text-center"><img src={item.pictureUrl} style={{width:'200px'}} className="border border-dark rounded"/></td>
                <td className="align-middle text-center fw-bold"> $ {item.price}</td>
                <td className="align-middle text-center fw-bold">{cantCompra}</td>
                <td className="align-middle text-center fw-bold">$ {precioTotalPorObjeto}</td>
                <td className="align-middle text-center fw-bold">
                    <button type="button" className="btn btn-primary" onClick={()=>{removeItem(item.id)}}>Eliminar</button>
                </td>
            </tr>
        </>    
    )
}
