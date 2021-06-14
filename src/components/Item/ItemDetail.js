import React from 'react';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({item}) => {

    return (
        <div className="d-flex justify-content-center my-5">
            <div className="card" style={{width: '18rem',padding:'10px'}}>
                <img src={item.data.pictureUrl} alt={item.data.description} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{item.data.title}</h5>
                    <p className="card-text">{item.data.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${item.data.price}</li>
                    <li className="list-group-item">Espesor: {item.data.width}</li>
                    <li className="list-group-item">Composición: {item.data.composition}</li>
                    <li className="list-group-item">Forma: {item.data.shape}</li>
                </ul>
                <ItemCount 
                    initial={1}
                    stock={item.data.amount}
                />
            </div>
        </div>
    )

    // return (
    //     <div className="d-flex justify-content-center my-5">
    //         <div className="card" style={{width: '18rem',padding:'10px'}}>
    //             <img src="" alt="" className="card-img-top"/>
    //             <div className="card-body">
    //                 <h5 className="card-title">{}</h5>
    //                 <p className="card-text">{}</p>
    //             </div>
    //             <ul className="list-group list-group-flush">
    //                 <li className="list-group-item">Precio: ${}</li>
    //                 <li className="list-group-item">Espesor: {}</li>
    //                 <li className="list-group-item">Composición: {}</li>
    //                 <li className="list-group-item">Forma: {}</li>
    //             </ul>
    //             <ItemCount 
    //                 initial={1}
    //                 stock={5}
    //             />
    //         </div>
    //     </div>
    // )
    
}

