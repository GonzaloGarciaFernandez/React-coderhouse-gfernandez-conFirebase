import React, {useState,useEffect} from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore} from '../../firebase/firebase';

export const ItemListContainer = () => {

    const { category } = useParams();

    const [producto, setProducto] = useState([]);

    useEffect( () => {
        const db = getFirestore();
        let itemCollection;

        if (category){
            itemCollection = db.collection("productos").where("category", "==", `${category}`);
        } else{
            itemCollection = db.collection("productos");
        };

        const itemCollectionQuery = itemCollection.get()
        itemCollectionQuery.then((querySnapshot) => {
            let documento = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setProducto(documento);
        })
        .catch((e) => {console.log(e)})
    }, [category]);

    return (
        <>
            <ItemList producto = { producto } />
        </>
    )
}
