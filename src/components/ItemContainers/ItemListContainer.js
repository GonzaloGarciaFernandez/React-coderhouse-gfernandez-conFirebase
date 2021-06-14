import React from 'react'
import { ItemList } from '../Item/ItemList';

export const ItemListContainer = () => {
    return (
        <>
            <h1 className="text-center fw-bold border-bottom">Todos los productos:</h1>
            <ItemList/>
        </>
    )
}
