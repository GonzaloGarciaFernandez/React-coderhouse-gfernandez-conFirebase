import React, {useState,useEffect} from 'react';
import { ItemList } from '../ItemList/ItemList';
import productos from '../../auxiliar/productos';
import { useParams } from 'react-router-dom';

const listaProductos = new Promise((resolve) => {
    setTimeout(function() {
        resolve(productos);
    }, 2000);
});

export const ItemListContainer = () => {

    const { category } = useParams();

    const [producto, setProducto] = useState({
        data: []
    });

    useEffect( () => {
        listaProductos.then( data => {
            if( category === undefined ) {
                setProducto({
                    data: data
                })
            } else {
                setProducto({
                    data: data.filter( producto => producto.category === category )
                });
            }
        });
    }, [category]);

    return (
        <>
            <ItemList producto = { producto } />
        </>
    )
}
