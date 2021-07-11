import React from 'react';
import { Item } from '../Item/Item';

export const ItemList = ({producto}) => {
    
    const listaItems = producto.length?producto.map((data) => {

    return(
        <Item data={data}/>
    )
    }):<tr><td colSpan={6}>Loading...</td></tr>;

    return (
        <div className="container my-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">Título</th>
                        <th className="text-center">Descripcion</th>
                        <th className="text-center">Precio</th>
                        <th className="text-center">Imagen</th>
                        <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    {listaItems}
                </tbody>
            </table>
        </div>
    )
}