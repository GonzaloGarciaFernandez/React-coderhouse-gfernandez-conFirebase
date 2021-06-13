import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../Item/ItemDetail';

const producto = 
    {
        id: 1, 
        title: 'Halcon', 
        description: 'eva rubber' , 
        price: 12700, 
        pictureUrl: 'https://www.padelparatodos.com.ar/imagenes/productos/paletas/1-PPT/8-HALCON.jpeg',
        width: '38mm',
        composition: 'eva rubber',
        shape: 'round',
        amount: 10
    }
;

const getItem = new Promise(resolve=>{
    setTimeout(()=>{
        resolve(producto);
    },2000);
});

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    useEffect(()=>{
        getItem.then((data)=>{
            setItem({
                data: data
            });
        });
    },[]);

    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}
