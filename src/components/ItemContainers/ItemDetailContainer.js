import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../Item/ItemDetail';
import { useParams } from 'react-router-dom';
import productos from '../../auxiliar/productos';

const getItem = new Promise(resolve=>{
    setTimeout(()=>{
        resolve(productos);
    },2000);
});

export const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState({
        data:{}
    });

    useEffect(()=>{
        getItem.then((data)=>{
            setItem({
                data: data.find(producto => producto.id === parseInt(id))
            });
        });
    },[]);

    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}
